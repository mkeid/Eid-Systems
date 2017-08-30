const emailjs = require("emailjs")
const express = require("express")
const PostsController = require("./controllers/posts")
const ProjectsController = require("./controllers/projects")
const SkillsController = require("./controllers/skills")
const { getComponents } = require("./models/component")
const { getPosts } = require("./models/post")
const { getProjects } = require("./models/project")

const router = express.Router()
// TODO: condense script and possibly split up into separate files

// Send application data store
router.route("/store").get(function(request, response) {
    getComponents(function(error, components) {
        let comps = {}
        for (let i = 0; i < components.length; i++) {
            let comp = components[i]
            comps[comp.name] = Object.assign({}, comp.component)
        }

        getProjects(function(error, projects) {
            const payload = Object.assign({}, comps, {projects})
            response.json(payload)
        })
    })
})

// Send self an email initiated from the contact page
router.route("/contact").post(function(request, response) {
    const server = emailjs.server.connect({
        user: "mohamedkeideidsystems@gmail.com",
        host: "smtp.gmail.com",
        password: "",
        ssl: true
    })

    const message = {
        text: `
            Name: ${request.body.email}
            Email: ${request.body.name}
            Message: ${request.body.message}
        `,
        from: "server@eid.systems",
        to: "mohamedkeid@gmail.com",
        subject: "Eid Systems Contact"
    }

    server.send(message, function(error, result) {
        console.log(error || result);
        response.json({
            name: request.body.name,
            email: request.body.email,
            message: request.body.message
        })
    })
})

router.route("/posts").get(PostsController.getPosts)
router.route("/skills").get(SkillsController.getSkills)

module.exports = router

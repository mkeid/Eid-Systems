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
        const comps = components.reduce((previous, comp) => {
            previous[comp.name] = comp.component
            return previous
        }, {})
        response.json(comps)
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

router.route("/posts").get(PostsController.list)
router.route("/posts/:post_id").get(PostsController.show)
router.route("/posts/:post_id").delete(PostsController.destroy)

router.route("/projects").get(ProjectsController.list)
router.route("/projects/:project_id").delete(ProjectsController.destroy)


router.route("/skills").get(SkillsController.list)
router.route("/skills/:skill_id").get(SkillsController.destroy)

module.exports = router

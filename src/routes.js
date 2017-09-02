const emailjs = require("emailjs")
const express = require("express")
const LinksController = require("./controllers/links_controller")
const PostsController = require("./controllers/posts_controller")
const ProjectsController = require("./controllers/projects_controller")
const SkillsController = require("./controllers/skills_controller")
const { getSites } = require("./models/site_model")

const router = express.Router()
// TODO: condense script and possibly split up into separate files

router.route("/links").get(LinksController.list)
router.route("/links/:link_id").delete(LinksController.destroy)

router.route("/posts").get(PostsController.list)
router.route("/posts/:post_id").get(PostsController.show)
router.route("/posts/:post_id").delete(PostsController.destroy)

router.route("/projects").get(ProjectsController.list)
router.route("/projects/:project_id").delete(ProjectsController.destroy)

router.route("/skills").get(SkillsController.list)
router.route("/skills/:skill_id").get(SkillsController.destroy)

// Send application data store
router.route("/sites").get(function(request, response) {
    getSites(function(error, sites) {
        const siteObjects = sites.reduce((previous, site) => {
            previous[site.title] = site.data
            return previous
        }, {})
        response.json(siteObjects)
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

module.exports = router

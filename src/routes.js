const express = require("express")
const AuthController = require("./controllers/auth_controller")
const ContactController = require("./controllers/contact_controller")
const LinksController = require("./controllers/links_controller")
const PostsController = require("./controllers/posts_controller")
const ProjectsController = require("./controllers/projects_controller")
const SitesController = require("./controllers/sites_controller")
const SkillsController = require("./controllers/skills_controller")

const router = express.Router()

// Auth routing
router.route("/auth/login").post(AuthController.login)

// Links routing
router.route("/links").get(LinksController.list)
router.route("/links/:link_id").delete(LinksController.destroy)

// Posts routing
router.route("/posts").get(PostsController.list)
router.route("/posts/:post_id").get(PostsController.show)
router.route("/posts/:post_id").delete(PostsController.destroy)

// Projects routing
router.route("/projects").get(ProjectsController.list)
router.route("/projects/:project_id").delete(ProjectsController.destroy)

// Sites routing
router.route("/sites").get(SitesController.list)

// Skills routing
router.route("/skills").get(SkillsController.list)
router.route("/skills/:skill_id").get(SkillsController.destroy)

// Contact routing
router.route("/contact").post(ContactController.sendEmail)

module.exports = router

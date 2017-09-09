const express = require("express")
const passport = require("passport")
const passportService = require("./services/passport_service")

const AuthController = require("./controllers/auth_controller")
const ContactController = require("./controllers/contact_controller")
const LinksController = require("./controllers/links_controller")
const PostsController = require("./controllers/posts_controller")
const ProjectsController = require("./controllers/projects_controller")
const SitesController = require("./controllers/sites_controller")
const SkillsController = require("./controllers/skills_controller")

const requireLogin = passport.authenticate("local", { session: false })
const requireAuth = passport.authenticate("jwt", { session: false })
const router = express.Router()

// Auth routing
router.route("/auth/login").post(requireLogin, AuthController.login)

// Links routing
router.route("/links").get(LinksController.list)
router.route("/links/:link_id").delete(requireAuth, LinksController.destroy)

// Posts routing
router.route("/posts").get(PostsController.list)
router.route("/posts/:post_id").get(PostsController.show)
router.route("/posts/:post_id").delete(requireAuth, PostsController.destroy)

// Projects routing
router.route("/projects").get(ProjectsController.list)
router.route("/projects/:project_id").get(ProjectsController.show)
router.route("/projects/:project_id").delete(requireAuth, ProjectsController.destroy)

// Sites routing
router.route("/sites").get(SitesController.list)
router.route("/sites/:title").get(SitesController.show)

// Skills routing
router.route("/skills").get(SkillsController.list)
router.route("/skills/:skill_id").get(SkillsController.show)
router.route("/skills/:skill_id").delete(requireAuth, SkillsController.destroy)

// Contact routing
router.route("/contact").post(ContactController.sendEmail)

module.exports = router

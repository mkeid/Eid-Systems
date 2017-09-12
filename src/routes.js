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
router.route("/links/:link_id").patch(requireAuth, LinksController.update)

// Posts routing
router.route("/posts").get(PostsController.list)
router.route("/posts").post(requireAuth, PostsController.create)
router.route("/posts/:post_id").get(PostsController.show)
router.route("/posts/:post_id").delete(requireAuth, PostsController.destroy)
router.route("/posts/:post_id").patch(requireAuth, PostsController.update)

// Projects routing
router.route("/projects").get(ProjectsController.list)
router.route("/projects").post(requireAuth, ProjectsController.create)
router.route("/projects/:project_id").get(ProjectsController.show)
router.route("/projects/:project_id").delete(requireAuth, ProjectsController.destroy)
router.route("/projects/:project_id").patch(requireAuth, ProjectsController.update)

// Sites routing
router.route("/sites").get(SitesController.list)
router.route("/sites/:title").get(SitesController.show)
router.route("/sites/:title").patch(requireAuth, SitesController.update)

// Skills routing
router.route("/skills").get(SkillsController.list)
router.route("/skills").post(requireAuth, SkillsController.create)
router.route("/skills/:skill_id").get(SkillsController.show)
router.route("/skills/:skill_id").delete(requireAuth, SkillsController.destroy)
router.route("/skills/:skill_id").patch(requireAuth, SkillsController.update)

// Contact routing
router.route("/contact").post(ContactController.sendEmail)

module.exports = router

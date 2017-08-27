const express = require("express")
const PostsController = require("./controllers/posts")
const ProjectsController = require("./controllers/projects")
const SkillsController = require("./controllers/skills")

const router = express.Router()

router.route("/posts").get(PostsController.getPosts)
router.route("/projects").get(ProjectsController.getProjects)
router.route("/skills").get(SkillsController.getSkills)


export default router

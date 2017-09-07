import React, {Component} from "react"
import {Route, Switch} from "react-router-dom"

import PostCreator from "./posts/post_creator"
import PostEditor from "./posts/post_editor"
import PostList from "./posts/post_list"

import ProjectCreator from "./projects/project_creator"
import ProjectEditor from "./projects/project_editor"
import ProjectList from "./projects/project_list"

import SkillCreator from "./skills/skill_creator"
import SkillEditor from "./skills/skill_editor"
import SkillList from "./skills/skill_list"

const AdminPages = props => (
    <div className="admin-pages">
        <Switch>
            // Post routes

            <Route exact path="/admin/posts" render={() => (
                <PostList
                    posts={props.posts}
                    fetchPosts={props.fetchPosts} />
            )} />

            <Route exact path="/admin/posts/new" render={() => (
                <PostCreator
                    createPost={props.createPost}/>
            )} />

            <Route exact path="/admin/posts/edit/:post_id" render={() => (
                <PostEditor
                    {...props.posts}
                    updatePost={props.updatePost} />
            )} />

            // Project routes

            <Route exact path="/admin/projects" render={() => (
                <ProjectList
                    projects={props.projects}
                    fetchProjects={props.fetchProjects} />
            )} />

            <Route exact path="/admin/projects/new" render={() => (
                <ProjectCreator
                    createProject={props.createProject} />
            )} />

            <Route exact path="/admin/projects/edit/:project_id" render={() => (
                <ProjectEditor
                    {...props.projects}
                    updateProject={props.updateProject} />
            )} />

            // Skill routes

            <Route exact path="/admin/skills" render={() => (
                <SkillList
                    skills={props.skills}
                    fetchSkills={props.fetchSkills} />
            )} />

            <Route exact path="/admin/skills/new" render={() => (
                <SkillCreator
                    createSkill={props.createSkill} />
            )} />

            <Route exact path="/admin/skills/edit/:skill_id" render={() => (
                <SkillEditor
                    {...props.skills}
                    updateSkill={props.updateSkill} />
            )} />
        </Switch>
    </div>
)

export default AdminPages

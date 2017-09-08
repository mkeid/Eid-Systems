import React, { Component } from "react"
import { Redirect, Route, Switch } from "react-router-dom"

import AboutFormContainer from "../../containers/admin/about_form_container"
import IndexFormContainer from "../../containers/admin/index_form_container"

import PostCreator from "./posts/post_creator"
import PostForm from "./posts/post_form"
import PostList from "./posts/post_list"

import ProjectCreator from "./projects/project_creator"
import ProjectForm from "./projects/project_form"
import ProjectList from "./projects/project_list"

import SkillCreator from "./skills/skill_creator"
import SkillForm from "./skills/skill_form"
import SkillList from "./skills/skill_list"

const AdminPages = props => (
    <div className="admin-pages">
        <Switch>
            // Site routes
            <Route exact path="/admin/about" render={() => (
                <AboutFormContainer
                    updateAdminPage={props.updateAdminPage}
                    about={props.about} />
            )} />

            <Route exact path="/admin/index" render={() => (
                <IndexFormContainer
                    updateAdminPage={props.updateAdminPage}
                    index={props.index} />
            )} />

            // Post routes

            <Route exact path="/admin/posts" render={() => (
                <PostList
                    updateAdminPage={props.updateAdminPage}
                    posts={props.posts}
                    fetchPosts={props.fetchPosts} />
            )} />

            <Route exact path="/admin/posts/new" render={() => (
                <PostCreator
                    createPost={props.createPost}/>
            )} />

            <Route exact path="/admin/posts/edit/:post_id"
                render={routeProps => (
                    <PostForm
                        posts={props.posts}
                        showPost={props.showPost}
                        updatePost={props.updatePost}
                        {...routeProps}/>
                )}
            />

            // Project routes

            <Route exact path="/admin/projects" render={() => (
                <ProjectList
                    updateAdminPage={props.updateAdminPage}
                    projects={props.projects}
                    fetchProjects={props.fetchProjects} />
            )} />

            <Route exact path="/admin/projects/new" render={() => (
                <ProjectCreator
                    createProject={props.createProject} />
            )} />

            <Route exact path="/admin/projects/edit/:project_id"
                render={routeProps => (
                    <ProjectForm
                        projects={props.projects}
                        showProject={props.showProject}
                        updateProject={props.updateProject}
                        {...routeProps} />
                )} />

            // Skill routes

            <Route exact path="/admin/skills" render={() => (
                <SkillList
                    updateAdminPage={props.updateAdminPage}
                    skills={props.skills}
                    fetchSkills={props.fetchSkills} />
            )} />

            <Route exact path="/admin/skills/new" render={() => (
                <SkillCreator
                    createSkill={props.createSkill} />
            )} />

            <Route exact path="/admin/skills/edit/:skill_id"
                render={routeProps => (
                    <SkillForm
                        skills={props.skills}
                        showSkill={props.showSkill}
                        updateSkill={props.updateSkill}
                        {...routeProps} />
                )}
            />
        </Switch>
    </div>
)

export default AdminPages

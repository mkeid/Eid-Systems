import React, { Component } from "react"
import { Redirect, Route, Switch } from "react-router-dom"

import AboutFormContainer from "../../containers/admin/about_form_container"
import IndexFormContainer from "../../containers/admin/index_form_container"

import LinkFormContainer from "../../containers/admin/link_form_container"
import LinkList from "./links/link_list"

import PostFormContainer from "../../containers/admin/post_form_container"
import PostList from "./posts/post_list"

import ProjectFormContainer from "../../containers/admin/project_form_container"
import ProjectList from "./projects/project_list"

import SkillFormContainer from "../../containers/admin/skill_form_container"
import SkillList from "./skills/skill_list"


/*
* Component that renders list of admin-specific routes
* @extends Component
*/
const AdminPages = props => (
    <div className="admin-pages">
        <Switch>
            // Site routes
            <Route exact path="/admin/about"
                render={() => (
                    <AboutFormContainer
                        about={props.sites.about}
                        showSite={props.showSite}
                        updateAdminPage={props.updateAdminPage}
                        updateSite={props.updateSite} />
                )} />

            <Route exact path="/admin/index"
                render={() => (
                    <IndexFormContainer
                        index={props.sites.index}
                        showSite={props.showSite}
                        updateAdminPage={props.updateAdminPage}
                        updateSite={props.updateSite} />
                )} />

            // Link routes

            <Route exact path="/admin/links"
                render={() => (
                    <LinkList
                        fetchLinks={props.fetchLinks}
                        links={props.links}
                        updateAdminPage={props.updateAdminPage} />
                )} />

            <Route exact path="/admin/links/new"
                render={routeProps => (
                    <LinkFormContainer
                        createLink={props.createLink}
                        updateAdminPage={props.updateAdminPage}
                        {...routeProps} />
                )} />

            <Route exact path="/admin/links/edit/:link_id"
                render={routeProps => (
                    <LinkFormContainer
                        links={props.links}
                        deleteLink={props.deleteLink}
                        showLink={props.showLink}
                        updateAdminPage={props.updateAdminPage}
                        updateLink={props.updateLink}
                        {...routeProps} />
                )} />

            // Post routes

            <Route exact path="/admin/posts"
                render={() => (
                    <PostList
                        fetchPosts={props.fetchPosts}
                        posts={props.posts}
                        updateAdminPage={props.updateAdminPage} />
                )} />

            <Route exact path="/admin/posts/new"
                render={routeProps => (
                    <PostFormContainer
                        createPost={props.createPost}
                        updateAdminPage={props.updateAdminPage}
                        {...routeProps} />
                )} />

            <Route exact path="/admin/posts/edit/:post_id"
                render={routeProps => (
                    <PostFormContainer
                        posts={props.posts}
                        deletePost={props.deletePost}
                        showPost={props.showPost}
                        updateAdminPage={props.updateAdminPage}
                        updatePost={props.updatePost}
                        {...routeProps} />
                )} />

            // Project routes

            <Route exact path="/admin/projects"
                render={() => (
                    <ProjectList
                        fetchProjects={props.fetchProjects}
                        projects={props.projects}
                        updateAdminPage={props.updateAdminPage} />
                )} />

            <Route exact path="/admin/projects/new"
                render={routeProps => (
                    <ProjectFormContainer
                        createProject={props.createProject}
                        updateAdminPage={props.updateAdminPage}
                        {...routeProps} />
                )} />

            <Route exact path="/admin/projects/edit/:project_id"
                render={routeProps => (
                    <ProjectFormContainer
                        projects={props.projects}
                        deleteProject={props.deleteProject}
                        showProject={props.showProject}
                        updateAdminPage={props.updateAdminPage}
                        updateProject={props.updateProject}
                        {...routeProps} />
                )} />

            // Skill routes

            <Route exact path="/admin/skills"
                render={() => (
                    <SkillList
                        updateAdminPage={props.updateAdminPage}
                        skills={props.skills}
                        fetchSkills={props.fetchSkills} />
                )} />

            <Route exact path="/admin/skills/new"
                render={routeProps => (
                    <SkillFormContainer
                        createSkill={props.createSkill}
                        updateAdminPage={props.updateAdminPage}
                        {...routeProps} />
                )} />

            <Route exact path="/admin/skills/edit/:skill_id"
                render={routeProps => (
                    <SkillFormContainer
                        skills={props.skills}
                        deleteSkill={props.deleteSkill}
                        showSkill={props.showSkill}
                        updateAdminPage={props.updateAdminPage}
                        updateSkill={props.updateSkill}
                        {...routeProps} />
                )}
            />
        </Switch>
    </div>
)

export default AdminPages

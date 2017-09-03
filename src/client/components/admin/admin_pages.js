import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

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
            <Route exact path="/posts"
                render={() => (<PostList {...props.posts} />)} />
            <Route exact path="/posts/new"
                render={() => (<PostCreator />)} />
            <Route exact path="/posts/edit/:post_id"
                render={() => (<PostEditor {...props.posts} />)} />

            <Route exact path="/projects"
                render={() => (<ProjectList {...props.projects} />)} />
            <Route exact path="/projects/new"
                render={() => (<ProjectCreator />)} />
            <Route exact path="/projects/edit/:project_id"
                render={() => (<ProjectEditor {...props.projects} />)} />

            <Route exact path="/skills"
                render={() => (<SkillList {...props.skills} />)} />
            <Route exact path="/skills/new"
                render={() => (<SkillCreator />)} />
            <Route exact path="/skills/edit/:skill_id"
                render={() => (<SkillEditor {...props.skills} />)} />
        </Switch>
    </div>
)

export default AdminPages

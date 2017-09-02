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
        </Switch>
    </div>
)

export default AdminPages

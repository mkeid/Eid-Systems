import _ from "lodash"
import React, { Component } from "react"
import { connect } from "react-redux"
import Index from "../components/index/index"

// Wire up the index site component with redux to propagate state
const mapStateToProps = ({ sites, projects }) => ({
    index: sites.index,
    projects: _.map(projects, (value, key) => value)
})

const IndexContainer = connect(mapStateToProps)(Index)

export default IndexContainer

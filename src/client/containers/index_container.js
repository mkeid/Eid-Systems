import _ from "lodash"
import React, { Component } from "react"
import { connect } from "react-redux"
import Index from "../components/index/index"

// Wire up the index site component with redux to propoagate state
const mapStateToProps = ({ sites, projects }) => ({
    index: sites.index,
    projects: _.map(projects, (value, key) => value)
})

// Init redux container for "Index" page
const IndexContainer = connect(mapStateToProps)(Index)

// Promote IndexSite from a component to a container
export default IndexContainer

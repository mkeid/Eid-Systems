import _ from "lodash"
import React, { Component } from "react"
import { connect } from "react-redux"
import IndexSite from "../components/index/index_site"

const mapStateToProps = ({ index, projects }) => ({
    index,
    projects: _.map(projects, (value, key) => value)
})

// Init redux container for "Index" page
const IndexContainer = connect(mapStateToProps)(IndexSite)

// Promote IndexSite from a component to a container
export default IndexContainer

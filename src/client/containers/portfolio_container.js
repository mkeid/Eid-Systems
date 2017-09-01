import _ from "lodash"
import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchProjects } from "../actions/projects"
import Portfolio from "../components/portfolio/portfolio"


const mapStateToProps = ({ projects }) => ({
    projects: _.map(projects, (value, key) => value)
})

// Init redux container for "Portfolio" page
const PortfolioContainer = connect(
    mapStateToProps,
    { fetchProjects }
)(Portfolio)

// Promote PortfolioSite from a component to a container
export default PortfolioContainer

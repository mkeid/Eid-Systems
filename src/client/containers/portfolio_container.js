import _ from "lodash"
import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchProjects } from "../actions/project_actions"
import Portfolio from "../components/portfolio/portfolio"

// Wire up the portfolio component with redux to propoagate state
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

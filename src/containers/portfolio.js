import React, { Component } from "react"
import { connect } from "react-redux"
import { PortfolioSite } from "../components/portfolio"

// Init redux container for "Portfolio" page
const mapStateToProps = state => ({
    projects: state.projects
})
const PortfolioContainer = connect(mapStateToProps)(PortfolioSite)

// Promote PortfolioSite from a component to a container
export default PortfolioContainer

import _ from "lodash"
import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchSkills } from "../actions/skill_actions"
import AboutSite from "../components/about/about_site"

// Wire up the about site component with redux to propoagate state
const mapStateToProps = ({ sites, skills }) => ({
    about: sites.about,
    skills: _.map(skills, (value, key) => value)
})

// Init redux container for "About" page
const AboutContainer = connect(
    mapStateToProps,
    { fetchSkills }
)(AboutSite)

// Promote AboutSite from a component to a container
export default AboutContainer

import React, { Component } from "react"
import { connect } from "react-redux"
import { AboutSite } from "../components/about"

// Init redux container for "About" page
const mapStateToProps = state => ({
    about: state.about,
    skills: state.skills
})
const AboutContainer = connect(mapStateToProps)(AboutSite)

// Promote AboutSite from a component to a container
export default AboutContainer

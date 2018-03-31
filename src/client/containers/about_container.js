import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSkills } from "../actions/skill_actions";
import AboutIndex from "../components/about/about_index";

// Wire up the about site component with redux to propagate state
const mapStateToProps = ({ sites, skills }) => ({
    about: sites.about,
    skills: _.map(skills, (value, key) => value)
});

const AboutContainer = connect(
    mapStateToProps,
    { fetchSkills }
)(AboutIndex);

export default AboutContainer;

import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../actions/project_actions";
import Portfolio from "../components/portfolio/portfolio";

// Wire up the portfolio component with redux to propagate state
const mapStateToProps = ({ projects }) => ({
    projects: _.map(projects, (value, key) => value)
});

const PortfolioContainer = connect(
    mapStateToProps,
    { fetchProjects }
)(Portfolio);

export default PortfolioContainer;

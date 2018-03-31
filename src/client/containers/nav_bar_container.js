import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../components/ui/nav_bar";
import { fetchLinks } from "../actions/link_actions";

// Wire up the nav bar component with redux to propagate state
const mapStateToProps = ({ links, nav}) => ({
    links: _.map(links, (value, key) => value),
    menuOpened: nav.menuOpened
});

const NavBarContainer = connect(mapStateToProps, { fetchLinks })(NavBar);

export default NavBarContainer;

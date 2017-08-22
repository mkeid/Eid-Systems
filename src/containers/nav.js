import React, { Component } from "react"
import { connect } from "react-redux"
import { NavBar } from "../components/nav"

// Init nav bar redux container
const mapStateToProps = state => state.nav
const NavContainer = connect(mapStateToProps)(NavBar)

// Promote NavBar from a component to a container
export default NavContainer

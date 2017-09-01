import React, { Component } from "react"
import { connect } from "react-redux"
import NavBar from "../components/ui/nav_bar"


const mapStateToProps = ({ nav }) => nav

// Init nav bar redux container
const NavBarContainer = connect(mapStateToProps)(NavBar)

// Promote NavBar from a component to a container
export default NavBarContainer

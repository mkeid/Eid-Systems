import React, { Component } from "react"
import { connect } from "react-redux"
import { BlogSite } from "../components/blog"

// Init redux container for "Blog" page
const mapStateToProps = state => ({
    posts: state.posts
})
const BlogContainer = connect(mapStateToProps)(BlogSite)

// Promote BlogSite from a component to a container
export default BlogContainer
import _ from "lodash"
import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchPosts } from "../actions/post_actions"
import BlogSite from "../components/blog/blog_site"

// Wire up the blog site component with redux to propoagate state
const mapStateToProps = ({ posts }) => ({
    posts: _.map(posts, (value, key) => value)
})

// Init redux container for "Blog" page
const BlogContainer = connect(
    mapStateToProps,
    { fetchPosts }
)(BlogSite)

// Promote BlogSite from a component to a container
export default BlogContainer

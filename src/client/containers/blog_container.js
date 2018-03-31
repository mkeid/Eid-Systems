import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/post_actions";
import BlogIndex from "../components/blog/blog_index";

// Wire up the blog site component with redux to propagate state
const mapStateToProps = ({ posts }) => ({
    posts: _.map(posts, (value, key) => value)
});

const BlogContainer = connect(
    mapStateToProps,
    { fetchPosts }
)(BlogIndex);

export default BlogContainer;

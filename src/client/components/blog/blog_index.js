import React, { Component } from "react"
import Post from "./post"


/**
* Component used by react router to render the "Blog" page
* @extends Component
*/
class BlogIndex extends Component {
    componentDidMount() {
        this.props.updateCurrentPage("Blog")
    }

    /** If a list of posts doesn't exist, fetch it */
    componentWillMount() {
        if (!this.props.posts.length) {
            this.props.fetchPosts()
        }
    }

    render() {
        const posts = this.props.posts.map(
            post => <Post key={post.title} {...post} />
        )

        return (
            <div className="blog-index">
                <div className="container">{posts}</div>
            </div>
        )
    }
}


export default BlogIndex

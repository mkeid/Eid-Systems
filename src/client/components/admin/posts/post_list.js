import React, { Component } from "react"

class PostList extends Component {
    render() {
        const posts = this.props.posts.map(post => (
            <div className="admin-item">

            </div>
        ))

        return (
            <div className="post-list">
                {posts}
            </div>
        )
    }
}

export default PostList

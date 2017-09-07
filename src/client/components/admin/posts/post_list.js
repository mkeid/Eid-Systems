import React, { Component } from "react"
import { Link } from "react-router-dom"

class PostList extends Component {
    componentWillMount() {
        if (!this.props.posts.length) {
            this.props.fetchPosts()
        }
    }

    render() {
        if (!this.props.posts.length) {
            return null
        }

        const posts = this.props.posts.map(post => (
            <div key={post.title} className="admin-item">
                <Link to={`/admin/posts/edit/${post._id}`}>
                    {post.title}
                </Link>
            </div>
        ))

        return (
            <div className="admin-list">
                {posts}
            </div>
        )
    }
}

export default PostList

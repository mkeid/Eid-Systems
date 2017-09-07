import React, { Component } from "react"
import { Link } from "react-router-dom"

class PostList extends Component {
    componentWillMount() {
        if (!this.props.posts.length) {
            this.props.fetchPosts()
        }
    }

    render() {
        let items = [(
            <div key="new" className="admin-item">
                <Link to={"/admin/posts/new"}>
                    <div className="new-item">
                        Create New Post
                    </div>
                </Link>
            </div>
        )]

        if (this.props.posts.length) {
            const posts = this.props.posts.map(post => (
                <div key={post.title} className="admin-item">
                    <Link to={`/admin/posts/edit/${post._id}`}>
                        <img src={post.imgSrc} />
                        <div className="content">
                            <div className="title">
                                {post.title}
                            </div>
                        </div>
                    </Link>
                </div>
            ))

            items = [...items, ...posts]
        }


        return (
            <div className="admin-list">
                {items}
            </div>
        )
    }
}

export default PostList

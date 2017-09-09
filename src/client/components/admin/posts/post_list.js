import _ from "lodash"
import React, { Component } from "react"
import { Link } from "react-router-dom"


/*
* Component that renders list of posts where each item links to an edit form
* @extends Component
*/
class PostList extends Component {
    /** Dispatch redux action to update page status and fetch latest posts */
    componentDidMount() {
        this.props.updateAdminPage("Posts")
        this.props.fetchPosts()
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

        // If a list of posts exists in the redux store, append them to items
        if (this.props.posts) {
            let posts = _.map(this.props.posts, (value, key) => value)
            posts = posts.map(post => (
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

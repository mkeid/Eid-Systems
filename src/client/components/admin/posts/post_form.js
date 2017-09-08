import React, { Component } from "react"

class PostForm extends Component {
    componentDidMount() {
        const postId = this.props.match.params["post_id"]

        if (postId && !this.props.posts[postId]) {
            this.props.showPost(postId)
        }
    }

    render() {
        return (
            <form>
                <div className="head">
                    Edit Post
                </div>
            </form>
        )
    }
}

export default PostForm

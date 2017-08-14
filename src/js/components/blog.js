import React, { Component } from "react"
import { connect } from "react-redux"


class Post extends Component {
    render() {
        return (
            <div className="post">
                <div className="title">{this.props.title}</div>
                <img src={this.props.imgSrc} />
                <div className="preview">{this.props.preview}</div>
            </div>
        )
    }
}

class BlogSite extends Component {
    componentDidMount() {
        this.props.updateCurrentPage("blog")
    }

    render() {
        const posts = this.props.posts.map(post =>
            <Post
                key={post.title}
                title={post.title}
                imgSrc={post.imgSrc}
                preview={post.preview}
            />
        )
        return (
            <div className="blog-site">
                {posts}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    posts: state.posts
})
const BlogContainer = connect(mapStateToProps)(BlogSite)
module.exports = {
    BlogContainer
}

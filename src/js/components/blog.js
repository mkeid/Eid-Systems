import React, { Component } from "react"
import { connect } from "react-redux"


class Post extends Component {
    render() {
        const date = this.props.date.toLocaleDateString('en-US', {
            day : 'numeric',
            month : 'short',
            year : 'numeric'
        })
        return (
            <div className="post">
                <div className="title">{this.props.title}</div>
                <div className="date">By Mohamed Eid on {date}</div>
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
                date={post.date}
                imgSrc={post.imgSrc}
                preview={post.preview}
            />
        )
        return (
            <div className="blog-site">
                <div className="container">{posts}</div>
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

import React, { Component } from "react"
import { connect } from "react-redux"


/**
* Component making up a single blog post
* @extends Component
*/
class Post extends Component {
    render() {
        //const date = this.props.date.toLocaleDateString('en-US', {
        //    day : 'numeric',
        //    month : 'short',
        //    year : 'numeric'
        //})
        const date = "2017"
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

/**
* Component used by react router to render the "Blog" page
* @extends Component
*/
class BlogSite extends Component {
    componentDidMount() {
        this.props.updateCurrentPage("Blog")
    }

    render() {
        const posts = this.props.posts.map(
            post => <Post key={post.title} {...post} />
        )

        return (
            <div className="blog-site">
                <div className="container">{posts}</div>
            </div>
        )
    }
}

// Init redux container for "Blog" page
const mapStateToProps = state => ({posts: state.posts})
const BlogContainer = connect(mapStateToProps)(BlogSite)

module.exports = { BlogContainer }

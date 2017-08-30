import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"


/**
* Component making up a single blog post
* @extends Component
*/
class Post extends Component {
    render() {
        const date = new Date(this.props.date)
        const dateString = date.toLocaleDateString('en-US', {
            day : 'numeric',
            month : 'short',
            year : 'numeric'
        })
        const dateText = `By Mohamed Eid on ${dateString}`
        const postUrl = `/blog/${this.props.title}`

        return (
            <div className="post">
                <div className="title">{this.props.title}</div>
                <div className="date">{dateText}</div>
                <img src={this.props.imgSrc} />
                <div className="preview">{this.props.preview}</div>
                {this.props.content ? (
                    <Link to={postUrl} className="read-more">
                        Read more
                    </Link>
                ) : null}
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
            <div className="blog-site">
                <div className="container">{posts}</div>
            </div>
        )
    }
}


module.exports = { BlogSite }

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

        return (
            <div className="post">
                <div className="title" children={this.props.title} />
                <div className="date">{dateText}</div>
                <img src={this.props.imgSrc} />
                <div className="preview" children={this.props.preview} />
                {this.props.content ? (
                    <Link
                        to={`/blog/${this.props.title}`}
                        className="read-more"
                        children={"Read more"}/>
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
        window.scrollTo(0, 0)
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

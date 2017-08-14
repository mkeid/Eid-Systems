import React, { Component } from 'react'


class Post extends Component {
    render() {
        return (
            <div className="post">
            </div>
        )
    }
}

class BlogSite extends Component {
    componentDidMount() {
        this.props.updateCurrentPage("blog")
    }

    render() {
        return (
            <div className="blog-site">
            </div>
        )
    }
}

module.exports = {
    BlogSite
}

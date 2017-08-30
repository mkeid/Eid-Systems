import React, { Component } from "react"


/**
* 404 page component function
*/
const NotFound = () => (
    <div className="not-found-site">
        <div className="billboard" />
    </div>
)


/**
* A general component function used for rendering sub components under a title
*/
class Body extends Component {
    render() {
        return (
            <div className="body">
                <div className="container">
                    <div className="content">
                        {this.props.title &&
                            <div className="title">
                                <span>{this.props.title}</span>
                            </div>
                        }
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}


/**
* The footer component at the bottom of the entire site
*/
class Footer extends Component {
    shouldComponentUpdate() {
        return false
    }

    render() {
        return (
            <div className="footer">
                <div className="copyright">
                    © Copyright 2017 | Mohamed K. Eid
                </div>
            </div>
        )
    }
}

export {
    Body,
    Footer,
    NotFound
}

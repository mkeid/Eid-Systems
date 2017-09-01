import React, { Component } from "react"

/**
* A single-project component
*/
class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            delay: props.delay,
            isVisible: false
        }

        // Bind this to functions
        this.makeVisible = this.makeVisible.bind(this)
    }

    componentDidMount() {
        this.appearTimeout = setTimeout(this.makeVisible, this.state.delay)
    }

    componentWillUnmount() {
        this.appearTimeout && clearTimeout(this.appearTimeout)
    }

    makeVisible() {
        this.setState({isVisible: true})
    }

    render() {
        const visibleClass = this.state.isVisible ? "visible" : ""
        const className = `project ${visibleClass}`

        return (
            <li className="project-container">
                <div className={className}>
                    <a href={this.props.url}>
                        <img src={this.props.imgSrc} />
                        <div className="project-info">
                            <div className="project-title">
                                {this.props.title}
                            </div>
                            <div className="project-type">
                                {this.props.type}
                            </div>
                        </div>
                        <div className="project-arrow">></div>
                    </a>
                </div>
            </li>
        )
    }
}

export default Project

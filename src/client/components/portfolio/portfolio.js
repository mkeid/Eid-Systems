import React, { Component } from "react"
import Project from "./project"


/**
* Component list of project components
* @extends Component
*/
class Portfolio extends Component {
    constructor(props) {
        super(props)
    }

    /** If a list of projects doesn't exist, fetch it */
    componentWillMount() {
        if (!this.props.projects.length) {
            this.props.fetchProjects()
        }
    }

    render() {
        const appearDelay = 150
        const projects = this.props.indexOnly ?
            this.props.projects.filter(project => project.forIndex).slice(0, 3)
            : this.props.projects
        const projectElements = projects.map(
            (item, index) =>
            <Project
                key={item.title}
                delay={index * appearDelay}
                focus={this.focusOnItem}
                {...item} />
        )

        return (
            <ul className="portfolio">
                <div className="container">
                    {projectElements}
                </div>
            </ul>
        )
    }
}


export default Portfolio

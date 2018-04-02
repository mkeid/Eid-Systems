import React, { Component } from "react";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";

import Portfolio from "../../containers/portfolio_container";
import indexParticlesConfig from "../../config/index_particles";

/**
* Component function appearing within the index billboard that lists skills.
*/
const InfoContainer = (props) => (
    <div className={props.type + "-container"}>
        <div className="title">{props.title}</div>
        <div className="details">{props.data}</div>
        <Link to="/about">Learn more</Link>
    </div>
);

/**
* Set of components that make up the left and right billboard containers.
* @extends Component
*/
class InfoContainers extends Component{
    render() {
        return (
            <div className="info-containers">
                <InfoContainer
                    type="left"
                    title={this.props.leftTitle}
                    data={this.props.leftKeywords} />
                <InfoContainer
                    type="right"
                    title={this.props.rightTitle}
                    data={this.props.rightKeywords} />
            </div>
        );
    }
}

/**
* Main head compnent at the top of the "Index" page.
* @extends Component
*/
class IndexBillboard extends Component {
    render() {
        // Data for the left-side component
        const leftData = this.props.data.left;
        const leftKeywords = leftData.keywords.map(
            data => <span key={data}>{data}</span>
        );

        // Data for the right-side component
        const rightData = this.props.data.right;
        const rightKeywords= rightData.keywords.map(
            data => (<span key={data}>{data}</span>)
        );

        return (
            <div className="billboard">
                <Particles height="33.5em" params={indexParticlesConfig} />
                <div className="container">
                    <InfoContainers
                        leftTitle={leftData.title}
                        leftKeywords={leftKeywords}
                        rightTitle={rightData.title}
                        rightKeywords={rightKeywords} />
                    <img src="/images/index/me-art.svg" />
                </div>
            </div>
        );
    }
}

export default IndexBillboard;

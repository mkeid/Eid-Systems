import React, { Component } from "react";

/**
* Component within the billboard used to center the contents.
* @extends Component
*/
class AboutBillboardWindow extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="info-containers">
                <div className="about-container">
                    <div className="title">{this.props.title}</div>
                    <div className="details">
                        <div className="head">{this.props.head}</div>
                        <div className="detail">{this.props.detail}</div>
                    </div>
                </div>
            </div>
        )
    }
}

/**
* Main head component at the top of the "About" page.
* @extends Component
*/
class AboutBillboard extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="billboard">
                <div className="container">
                    <AboutBillboardWindow
                        title="About Me"
                        head={this.props.about.head}
                        detail={this.props.about.detail} />
                </div>
            </div>
        );
    }
}

export default AboutBillboard;

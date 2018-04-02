import React, { Component } from "react";
import VisibilitySensor from "react-visibility-sensor";
import Keyword from "./keyword";


/**
* A Component making up an individual section in the about page
* @extends Component
*/
class Skill extends Component {
    constructor(props) {
        super(props);
        this.showKeywords = this.showKeywords.bind(this);
        this.state = { keywordsAreVisible: false };
    }

    /**
     * Set the set of keywords to visible so each word invokes its action.
     * @param {*} isVisible 
     */
    showKeywords(isVisible) {
        if (!this.state.keywordsAreVisible && isVisible) {
            this.setState({ keywordsAreVisible: true });
        }
    }

    render() {
        // Split the description array into a list of paragraph components
        const descriptions = this.props.description.map(
            (paragraph, index) => (<p key={ index }>{ paragraph }</p>)
        );

        // Create a list of keyword components for each tag
        const keywords = this.props.keywords.sort().map(
            (keyword, index) => (
                <Keyword
                    key={ keyword }
                    delay={ index * 500 }
                    setIsVisible={this.state.keywordsAreVisible}
                    word={ keyword } />
            )
        );

        return (
            <div className="skill">
                <div className="container">
                    <div className="title">
                        {this.props.title}
                    </div>
                    <div className="description">
                        <img src={ this.props.imgSrc } />
                        {descriptions}
                    </div>
                    <VisibilitySensor
                        onChange={ this.showKeywords }>
                        <div className="keywords">
                            { keywords }
                        </div>
                    </VisibilitySensor>
                </div>
            </div>
        );
    }
}

export default Skill;

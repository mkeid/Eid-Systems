import React, { Component } from "react";

/**
* A Component making up an individual keyword in a set of skills
* @extends Component
*/
class Keyword extends Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: false };

        // Bind this to function
        this.show = this.show.bind(this);
    }

    /** Listen to see if the keyword should be visible */
    componentDidUpdate() {
        if (this.props.setIsVisible && !this.state.isVisible) {
            this.showKeywordTimeout = setTimeout(this.show, this.props.delay);
        }
    }

    /** Clear timeout so component doesn't try to set state while unmounted */
    componentWillUnmount() {
        this.showKeywordTimeout && clearTimeout(this.showKeywordTimeout);
    }

    /** Update visibility state so keyword can invoke its animation */
    show() {
        this.setState({ isVisible: true });
    }

    render() {
        const visibleClass = this.state.isVisible ? "visible" : "";
        const className = `keyword ${visibleClass}`;

        return (<div className={ className }>{this.props.word}</div>);
    }
}

export default Keyword

import React, { Component } from "react";

/**
* A general component function used for rendering sub components under a title.
* @extends Component
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
        );
    }
}

export default Body;

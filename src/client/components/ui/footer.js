import React, { Component } from "react";

/**
* The footer component at the bottom of the entire site.
* @extends Component
*/
class Footer extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="footer">
                <div className="copyright">
                    © Copyright 2017 | Mohamed K. Eid
                </div>
            </div>
        );
    }
}

export default Footer;

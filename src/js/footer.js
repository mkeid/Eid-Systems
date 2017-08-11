import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function Copyright(props) {
    return (
        <div className="copyright">
            © {props.year} {props.name}
        </div>
    )
}

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Copyright
                    name={this.props.copyrightName}
                    year={this.props.copyrightYear}
                />
            </div>
        )
    }
}

module.exports = Footer

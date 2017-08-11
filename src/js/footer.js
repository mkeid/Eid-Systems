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
        const name = 'Mohamed K. Eid'
        const year = 2017
        return (
            <div className="footer">
                <Copyright
                    name={name}
                    year={year}
                />
            </div>
        )
    }
}

module.exports = Footer

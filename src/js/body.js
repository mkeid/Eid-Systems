import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Portfolio } from './portfolio.js'

class Body extends Component {
    render() {
        return (
            <div className="body">
                <div className="container">
                    <div className="title">
                        <span>{this.props.title}</span>
                    </div>
                </div>
                <Portfolio />
            </div>
        )
    }
}

module.exports = Body

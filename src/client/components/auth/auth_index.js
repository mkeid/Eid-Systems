import React, { Component } from "react"

class AuthIndex extends Component {
    constructor(props) {
        super(props)
    }

    shouldComponentUpdate() {
        return false
    }

    render() {
        return (
            <div className="auth-index">
                <div className="container">
                </div>
            </div>
        )
    }
}

export default AuthIndex

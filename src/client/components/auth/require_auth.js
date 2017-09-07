import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

export default function(ComposedComponent) {
    class RequireAuth extends Component {
        componentDidUpdate() {
            if (!this.props.auth.isAuthenticated) {
                this.context.router.history.push("/auth")
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    RequireAuth.contextTypes = {
        router: PropTypes.object
    }

    const mapStateToProps = ({ isAuthenticated }) => ({ isAuthenticated })

    return connect(mapStateToProps)(RequireAuth)
}

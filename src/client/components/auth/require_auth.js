import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

export default function(ComposedComponent) {
    class RequireAuth extends Component {
        componentWillMount() {
            if (!this.props.auth || !this.props.auth.token) {
                this.context.router.history.push("/404")
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

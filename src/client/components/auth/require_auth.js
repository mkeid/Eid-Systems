import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";


/** Function for creating a higher-order component that requires auth */
export default function(ComposedComponent) {
    /*
    * Higher-order component that requires a user to be authenticated to render
    * @extends Component
    */
    class RequireAuth extends Component {
        componentDidUpdate() {
            if (!this.props.auth.isAuthenticated) {
                this.context.router.history.push("/auth");
            }
        }

        render() {
            return (<ComposedComponent {...this.props} />);
        }
    }

    // Enable the router context type so that the component can redirect a user
    RequireAuth.contextTypes = {
        router: PropTypes.object
    };

    // Promote the component to be a container so that it determine auth status
    const mapStateToProps = ({ isAuthenticated }) => ({ isAuthenticated });
    return connect(mapStateToProps)(RequireAuth);
}

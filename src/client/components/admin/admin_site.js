import React, { Component } from "react"
import AdminMenu from "./admin_menu"
import AdminPages from "./admin_pages"
import requireAuth from "../auth/require_auth"

class AdminSite extends Component {
    render() {
        return (
            <div className="admin-index">
                <div className="container">
                    <AdminMenu logout={this.props.logout} />
                    <AdminPages {...this.props} />
                </div>
            </div>
        )
    }
}

export default requireAuth(AdminSite)

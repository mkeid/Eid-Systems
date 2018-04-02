import React, { Component } from "react";

import AdminMenu from "./admin_menu";
import AdminPages from "./admin_pages";
import requireAuth from "../auth/require_auth";

/**
* Component that renders the parent element encompassing the various admin pages
* @extends Component
*/
class AdminSite extends Component {
    render() {
        return (
            <div className="admin-index">
                <div className="container">
                    <AdminMenu
                        currentPage={this.props.admin.currentPage}
                        logout={this.props.logout} />
                    <AdminPages {...this.props} />
                </div>
            </div>
        );
    }
}

export default requireAuth(AdminSite);

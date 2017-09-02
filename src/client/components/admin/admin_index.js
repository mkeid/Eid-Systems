import React, { Component } from "react"
import AdminMenu from "./admin_menu"
import AdminPages from "./admin_pages"

class AdminIndex extends Component {
    render() {
        return (
            <div className="admin-index">
                <div className="container">
                    <AdminMenu />
                    <AdminPages />
                </div>
            </div>
        )
    }
}

export default AdminIndex

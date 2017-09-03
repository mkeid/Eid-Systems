import React, { Component } from "react"
import { Link } from "react-router-dom"

class AdminMenu extends Component {
    shouldComponentUpdate() {
        return false
    }

    render() {
        const menuList = ["Posts", "Projects", "Skills"]
        const menuItems = menuList.map(menuItem => (
            <div key={menuItem} className="menu-item">
                <Link to={`/admin/${menuItem.toLowerCase()}`}>
                    menuItem
                </Link>
            </div>
        ))

        return (
            <div className="admin-menu">
                {menuItems}
            </div>
        )
    }
}

export default AdminMenu

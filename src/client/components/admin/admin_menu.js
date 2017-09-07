import React, { Component } from "react"
import { Link } from "react-router-dom"

class AdminMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: "Index"
        }

        // Bind this to functions
        this.handleLogout = this.handleLogout.bind(this)
        this.updateCurrentPage = this.updateCurrentPage.bind(this)
    }

    handleLogout(event) {
        event.preventDefault()
        this.props.logout()
    }

    updateCurrentPage(pageTitle) {
        this.setState({
            currentPage: pageTitle
        })
    }

    render() {
        const menuList = ["Index", "About", "Posts", "Projects", "Skills"]
        const menuItems = menuList.map(menuItem => (
            <div
                key={menuItem}
                className={"menu-item " +
                    (this.state.currentPage === menuItem ? "selected" : null)
                }
                onClick={() => this.updateCurrentPage(menuItem)}>
                <Link to={`/admin/${menuItem.toLowerCase()}`}>
                    {menuItem}
                </Link>
            </div>
        ))
        const logoutItem = (
            <div key="logout" className="menu-item">
                <a href="#" onClick={this.handleLogout}>
                    Logout
                </a>
            </div>
        )

        return (
            <div className="admin-menu">
                {menuItems}
                {logoutItem}
            </div>
        )
    }
}

export default AdminMenu

import React, { Component } from "react";
import { Link } from "react-router-dom";


/*
* Component that renders a menu of items linking to various admin pages
* @extends Component
*/
class AdminMenu extends Component {
    constructor(props) {
        super(props);

        // Bind this to functions
        this.handleLogout = this.handleLogout.bind(this);
    }

    /** Dispatch redux action to handle logging out */
    handleLogout(event) {
        event.preventDefault();
        this.props.logout();
    }

    render() {
        const menuList = [
            "Index", "About", "Links", "Posts", "Projects", "Skills"
        ];
        const menuItems = menuList.map(menuItem => (
            <div
                key={menuItem}
                className={"menu-item " +
                    (this.props.currentPage === menuItem ? "selected" : null)
                }>
                <Link to={`/admin/${menuItem.toLowerCase()}`}>
                    {menuItem}
                </Link>
            </div>
        ));
        const logoutItem = (
            <div key="logout" className="menu-item">
                <a href="#" onClick={this.handleLogout}>
                    Logout
                </a>
            </div>
        );

        return (
            <div className="admin-menu">
                {menuItems}
                {logoutItem}
            </div>
        );
    }
}


export default AdminMenu;

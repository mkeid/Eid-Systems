import React, { Component } from "react";
import { Link } from "react-router-dom";


/**
* A single nav item component representing a title / link to another page
*/
function NavItem(props) {
    const className = `nav-item ${props.selected ? "selected" : null}`;
    return (
        <Link to={props.href} className={className}>
            {props.title}
        </Link>
    );
}


/**
* A component set of title components that are used for navigation by the bar
* @extends Component
*/
class NavItemList extends Component {
    constructor(props) {
        super(props);
        this.titles = ["About", "Blog", "Contact", "Portfolio"];
    }

    render() {
        const homeItem = (
            <NavItem
                key="home"
                title="HOME"
                href="/"
                selected={"Home" == this.props.currentPage} />
        );

        const navItems = this.titles.map(item =>
            <NavItem
                key={item}
                title={item.toUpperCase()}
                href={"/" + item.toLowerCase()}
                selected={item === this.props.currentPage} />
        );

        return (
            <div className="nav-item-list-parent">
                <div className="nav-item-list">
                    {[homeItem, ...navItems]}
                </div>
            </div>
        );
    }
}


export default NavItemList;

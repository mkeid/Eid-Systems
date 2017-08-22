import React, { Component } from "react"
import { Link } from "react-router-dom"


/**
* Logo component function that sits on the nav bar for redirecting the user home
*/
const Logo = (props) => (
    <div className="logo">
        <Link to="/">
            <img src={props.imgSrc} />
        </Link>
    </div>
)


/**
* Hamburger component function that sits on the nav bar for redirecting the user
*/
const Hamburger = () => (
    <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
    </div>
)


function NavItem(props) {
    const className = "nav-item" + (props.selected ? " selected" : "")
    return (
        <Link to={props.href} className={className}>
            {props.title}
        </Link>
    )
}


/**
* A component set of title components that are used for navigation by the bar
* @extends Component
*/
class NavItemList extends Component {
    constructor(props) {
        super(props)
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    }

    // Toggle menu visibility
    handleCheckboxChange() {
        if (this.props.menuOpened) {
            this.props.menuClose()
        } else {
            this.props.menuOpen()
        }
    }

    render() {
        const navItems = this.props.items.sort().map(item =>
            <NavItem
                key={item}
                title={item.toUpperCase()}
                href={"/" + item.toLowerCase()}
                selected={item === this.props.currentPage} />
        )

        return (
            <div className="nav-item-list-parent">
                <input
                    type="checkbox"
                    checked={this.props.menuOpened}
                    onChange={this.handleCheckboxChange} />
                <div className="nav-item-list">{navItems}</div>
            </div>
        )
    }
}


/**
* A component comprised of social media component links
* @extends Component
*/
class NavSocialList extends Component {
    render() {
        const navSocials = this.props.socials.map(
            social => (
                <a key={social.site}
                    className="nav-social"
                    href={social.href}>
                    <img src={social.imgSrc} />
                </a>
            )
        )

        return <div className="nav-social-list">{navSocials}</div>
    }
}


/**
* Component that sits at the top of the site used for routing the user
* @extends Component
*/
class NavBar extends Component {
    render() {
        const logo = (<Logo imgSrc={this.props.logoImgSrc} />)
        const navItemList = (<NavItemList {...this.props} />)

        return (
            <div className="nav-bar">
                <div className="container">
                    {logo}
                    {navItemList}
                    <NavSocialList socials={this.props.socials} />
                    <Hamburger />
                </div>
            </div>
        )
    }
}


module.exports = { NavBar }

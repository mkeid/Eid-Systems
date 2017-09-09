import React, { Component } from "react"
import { Link } from "react-router-dom"
import NavItemList from "./nav_item_list"
import NavSocialList from "./nav_social_list"


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


/**
* Component that sits at the top of the site used for routing the user
* @extends Component
*/
class NavBar extends Component {
    constructor(props) {
        super(props)
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    }

    componentWillMount() {
        if (!this.props.links.length) {
            this.props.fetchLinks()
        }
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
        const logo = (<Logo imgSrc="/images/logo.svg" />)
        const navItemList = (<NavItemList {...this.props} />)

        return (
            <div>
                <div className="nav-bar">
                    <div className="container">
                        {logo}
                        {navItemList}
                        <NavSocialList links={this.props.links} />
                    </div>
                </div>
                <div className="mobile-menu">
                    <input
                        type="checkbox"
                        checked={this.props.menuOpened}
                        onChange={this.handleCheckboxChange} />
                    <Hamburger />
                    {navItemList}
                    <div className="black-cover" />
                </div>
            </div>
        )
    }
}


export default NavBar

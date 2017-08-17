import React, { Component } from "react"
import ReactDOM from "react-dom"
import { connect } from "react-redux"
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


function NavItem(props) {
    const className = "nav-item" + (props.selected ? " selected" : "")
    return (
        <Link to={props.href} className={className} children={props.title} />
    )
}


/**
* A component set of title components that are used for navigation by the bar
* @extends Component
*/
class NavItemList extends Component {
    render() {
        const navItems = this.props.items.sort().map(item =>
            <NavItem key={item}
                title={item.toUpperCase()}
                href={"/" + item.toLowerCase()}
                selected={item === this.props.currentPage} />
        )

        return (
            <div className="nav-item-list" children={navItems} />
        )
    }
}


/**
* A button component function for sending the user off to a social media link
*/
const NavSocial = (props) => (
    <a href={props.href} className="nav-social">
        <img src={props.imgSrc} />
    </a>
)


/**
* A component comprised of social media component links
* @extends Component
*/
class NavSocialList extends Component {
    render() {
        const navSocials = this.props.socials.map(
            social => <NavSocial key={social.site} {...social} />
        )

        return (
            <div className="nav-social-list" children={navSocials} />
        )
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

        return this.props.isMobile ? (
            <div className="mobile-nav-bar">
                <div className="container">{logo}</div>
                {navItemList}
            </div>
        ) :
        (
            <div className="nav-bar">
                <div className="container">
                    {logo} {navItemList}
                    <NavSocialList socials={this.props.socials} />
                </div>
            </div>
        )
    }
}


// Init redux container nav bar
const mapStateToProps = state => ({
    isMobile: state.isMobile,
    items: state.nav.items,
    logoImgSrc: state.nav.logoImgSrc,
    socials: state.nav.socials
})
const NavContainer = connect(mapStateToProps)(NavBar)

module.exports = NavContainer

import React, { Component } from "react"
import ReactDOM from "react-dom"
import { connect } from "react-redux"
import { Link } from "react-router-dom"


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
        <Link to={props.href} className={className}>
            {props.title}
        </Link>
    )
}

const NavSocial = (props) => (
    <a href={props.href} className="nav-social">
        <img src={props.imgSrc} />
    </a>
)

class NavItemList extends React.Component {
    render() {
        const navItems = this.props.items.map(item =>
            <NavItem
                key={item}
                title={item.toUpperCase()}
                href={item.toLowerCase()}
                selected={this.props.currentPage[item.toLowerCase()]}
            />
        )
        return (
            <div className="nav-item-list">
                {navItems}
            </div>
        )
    }
}

class NavSocialList extends React.Component {
    render() {
        const navSocials = this.props.socials.map(social =>
            <NavSocial
                key={social["site"]}
                href={social["url"]}
                imgSrc={social["src"]}
            />
        )
        return (
            <div className="nav-social-list">
                {navSocials}
            </div>
        )
    }
}

class NavBar extends React.Component {
    render() {
        return (
            <div className="nav-bar">
                <div className="container">
                    <Logo imgSrc={this.props.logoImgSrc} />
                    <NavItemList
                        items={this.props.items.sort()}
                        currentPage={this.props.currentPage}
                    />
                    <NavSocialList socials={this.props.socials} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.nav.items,
    logoImgSrc: state.nav.logoImgSrc,
    socials: state.nav.socials
})
const NavContainer = connect(mapStateToProps)(NavBar)
module.exports = NavContainer

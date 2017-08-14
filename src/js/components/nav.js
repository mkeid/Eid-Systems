import React, { Component } from "react"
import ReactDOM from "react-dom"
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
                title={item}
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
        const logoImgSrc = "/images/logo.png"
        const navItemsData = ["About", "Portfolio", "Contact"]
        const navSocialsData = [
            {
                site: "GitHub",
                url: "https://github.com/mohamedkeid",
                src: "/images/github.png"
            },
            {
                site: "LinkedIn",
                url: "https://www.linkedin.com/in/mkeid/",
                src: "/images/linkedin.png"
            }
        ]
        return (
            <div className="nav-bar">
                <Logo imgSrc={logoImgSrc} />
                <NavItemList
                    items={navItemsData}
                    currentPage={this.props.currentPage}
                />
                <NavSocialList socials={navSocialsData} />
            </div>
        )
    }
}

module.exports = NavBar

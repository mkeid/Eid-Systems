import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Link } from "react-router-dom"


const NavItem = (props) => (
    <Link to={props.href} className="nav-item">
        {props.title}
    </Link>
)

const NavSocial = (props) => (
    <a href={props.href} className="nav-social">
        <img src={props.imgSrc} />
    </a>
)

const Logo = (props) => (
    <div className="logo">
        <Link to="/">
            <img src={props.imgSrc} />
        </Link>
    </div>
)

class NavItemList extends React.Component {
    render() {
        const navItems = this.props.items.map(item =>
            <NavItem
                key={item}
                title={item}
                href={item.toLowerCase()}
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
                <Logo imgSrc={logoImgSrc}/>
                <NavItemList items={navItemsData}/>
                <NavSocialList socials={navSocialsData}/>
            </div>
        )
    }
}

module.exports = NavBar

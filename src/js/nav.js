import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function NavItem(props) {
    return (
        <a href={props.href} className="navItem">
            {props.title}
        </a>
    )
}

function NavSocial(props) {
    return (
        <a href={props.href} className="navSocial">
            <img src={props.imgSrc} />
        </a>
    )
}

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <a href="/">
                    <img src={this.props.imgSrc} />
                </a>
            </div>
        )
    }
}

class NavItemList extends React.Component {
    render() {
        const navItems = this.props.items.map(item =>
            <NavItem
                key={item}
                href={item.toLowerCase()}
                title={item}
            />
        )
        return (
            <div className="navItemList">
                {navItems}
            </div>
        )
    }
}

class NavSocialList extends React.Component {
    render() {
        const navSocials = this.props.socials.map(social =>
            <NavSocial
                key={social['site']}
                href={social['url']}
                imgSrc={social['src']}
            />
        )
        return (
            <div className="navSocialList">
                {navSocials}
            </div>
        )
    }
}

class NavBar extends React.Component {
    render() {
        return (
            <div className="navBar">
                <Logo imgSrc={this.props.logoImgSrc}/>
                <NavItemList items={this.props.navItemsData}/>
                <NavSocialList socials={this.props.navSocialsData}/>
            </div>
        )
    }
}

module.exports = NavBar

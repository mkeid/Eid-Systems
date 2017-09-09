import React, { Component } from "react"


/**
* A component comprised of social media component links
* @extends Component
*/
class NavSocialList extends Component {
    render() {
        const navSocials = this.props.links.map(
            link => (
                <a key={link.title}
                    className="nav-social"
                    href={link.href}>
                    <img src={link.imgSrc} />
                </a>
            )
        )

        return <div className="nav-social-list">{navSocials}</div>
    }
}


export default NavSocialList

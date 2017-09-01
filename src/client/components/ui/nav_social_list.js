import React, { Component } from "react"

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

export default NavSocialList

const NavReducer = () => ({
    items: ["About", "Portfolio", "Contact", "Blog"],
    logoImgSrc: "/images/logo.png",
    socials: [
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
})

module.exports = NavReducer

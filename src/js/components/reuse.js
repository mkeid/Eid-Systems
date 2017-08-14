import React, { Component } from "react"

const Body = (props) => (
    <div className="body">
        <div className="container">
            {props.title &&
                <div className="title">
                    <span>{props.title}</span>
                </div>
            }
        </div>
        {props.children}
    </div>
)

const Copyright = (props) => (
    <div className="copyright">
        © Copyright {props.year} | {props.name}
    </div>
)

function Footer(props) {
    const name = 'Mohamed K. Eid'
    const year = 2017
    return (
        <div className="footer">
            <Copyright
                name={name}
                year={year}
            />
        </div>
    )
}

module.exports = {
    Body,
    Footer
}

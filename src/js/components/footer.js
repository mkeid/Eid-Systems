import React, { Component } from 'react'
import ReactDOM from 'react-dom'


const Copyright = (props) => (
    <div className="copyright">
        © {props.year} {props.name}
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

module.exports = Footer

import React, { Component } from "react"


/**
* A general component function used for rendering sub components under a title
*/
const Body = props => (
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


/**
* The footer component function at the bottom of the entire site
*/
const Footer = props => (
    <div className="footer">
        <div className="copyright">
            © Copyright 2017 | Mohamed K. Eid
        </div>
    </div>
)


module.exports = { Body, Footer }

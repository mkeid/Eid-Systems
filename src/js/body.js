import React, { Component } from 'react'

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

module.exports = Body

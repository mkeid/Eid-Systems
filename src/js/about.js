import React, { Component } from 'react'
import NavBar from './nav'
import { AboutBillboard } from './billboard'
import Body from './body'


const AboutSite = () => (
    <div className="about-site">
        <AboutBillboard />
        <Body title="SKILLS">

        </Body>
    </div>
)

module.exports = {
    AboutSite
}

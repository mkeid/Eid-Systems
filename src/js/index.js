import React, { Component } from 'react'
import { IndexBillboard } from './billboard'
import Body from './body'
import { Portfolio } from './portfolio'


const IndexSite = () => (
    <div className="index-site">
        <IndexBillboard />
        <Body title='SOME OF MY LATEST WORK'>
            <Portfolio />
        </Body>
    </div>
)

module.exports = {
    IndexSite
}

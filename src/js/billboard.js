import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class InfoContainers extends Component{
    render() {
        return (
            <div className="info-containers">
                <div className="developer-container">
                    <div className="title">Web Dev</div>
                    <div className="details">{this.props.developerData}</div>
                    <a href='/about'>Learn more</a>
                </div>
                <div className="engineer-container">
                    <div className="title">Engineer</div>
                    <div className="details">{this.props.engineerData}</div>
                    <a href='/about'>Learn more</a>
                </div>
            </div>
        )
    }
}

class IndexBillboard extends Component {
    render() {
        let developerData = [
            'React', 'Redux', 'Node.js', 'MongoDB', 'Rails'
        ]
        developerData = developerData.map(data => (
            <span key={data}>{data}</span>
        ))

        let engineerData = [
            'Unix/Linux', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'NumPy',
        ]
        engineerData = engineerData.map(data => (
            <span key={data}>{data}</span>
        ))

        return (
            <div className="billboard">
                <div className="container">
                    <InfoContainers
                        developerData={developerData}
                        engineerData={engineerData}
                    />
                    <img src="/images/me-art.png" />
                </div>
            </div>
        )
    }
}

class Billboard extends Component {
    render() {
        return (
            <div className="billboard">
                {this.props.child}
            </div>
        )
    }
}

module.exports = {
    Billboard,
    IndexBillboard
}

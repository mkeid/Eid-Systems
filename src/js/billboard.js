import React, { Component } from 'react'
import ReactDOM from 'react-dom'


const InfoContainer = (props) => (
    <div className={props.type + '-container'}>
        <div className="title">{props.title}</div>
        <div className="details">{props.data}</div>
        <a href='/about'>Learn more</a>
    </div>
)

class InfoContainers extends Component{
    render() {
        return (
            <div className="info-containers">
                <InfoContainer
                    type='developer'
                    title='Web Dev'
                    data={this.props.developerData}
                />
                <InfoContainer
                    type='engineer'
                    title='Engineer'
                    data={this.props.engineerData}
                />
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

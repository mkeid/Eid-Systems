import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'


const InfoContainer = (props) => (
    <div className={props.type + '-container'}>
        <div className="title">{props.title}</div>
        <div className="details">{props.data}</div>
        <Link to='/about'>Learn more</Link>
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

const AboutContainer = (props) => (
    <div className="info-containers">
        <div className='about-container'>
            <div className="title">{props.title}</div>
            <div className="details">{props.data}</div>
        </div>
    </div>
)

class AboutBillboard extends Component {
    render() {
        const head = "I'm a web developer and software engineer from the Greater New York area."
        const detail = "I enjoy building things that provide a tangible difference to the world. When I'm not programming, you'll find me bouldering or producing music."
        const data = (
            <div>
                <div className="head">{head}</div>
                <div className="detail">{detail}</div>
            </div>
        )
        return (
            <div className="billboard">
                <div className="container">
                    <AboutContainer
                        title="About Me"
                        data={data}
                    />
                </div>
            </div>
        )
    }
}

class ContactBillboard extends Component {
    render() {
        return (
            <div className="billboard">
                <div className="container">

                </div>
            </div>
        )
    }
}

module.exports = {
    IndexBillboard,
    AboutBillboard,
    ContactBillboard
}

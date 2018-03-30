import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";


/*
* Component that renders list of lists where each item links to an edit form
* @extends Component
*/
class LinkList extends Component {
    /** Dispatch redux action to update page status and fetch latest posts */
    componentDidMount() {
        this.props.updateAdminPage("Links");
        this.props.fetchLinks();
    }

    render() {
        let items = [(
            <div key="new" className="admin-item">
                <Link to={"/admin/links/new"}>
                    <div className="new-item">
                        Create New Link
                    </div>
                </Link>
            </div>
        )]

        // If a list of links exists in the redux store, append them to items
        if (this.props.links) {
            let links = _.map(this.props.links, (value, key) => value)
            links = links.map(link => (
                <div key={link._id} className="admin-item">
                    <Link to={`/admin/links/edit/${link._id}`}>
                        <img src={link.imgSrc} />
                        <div className="content">
                            <div className="title">
                                {link.title}
                            </div>
                        </div>
                    </Link>
                </div>
            ))

            items = [...items, ...links]
        }

        return (
            <div className="admin-list">
                {items}
            </div>
        )
    }
}


export default LinkList

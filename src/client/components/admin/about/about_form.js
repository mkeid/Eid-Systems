import React, { Component } from "react";
import { Field } from "redux-form";
import { Notification } from 'react-notification';

import { CancelButton, SubmitButton, SuccessButton } from "../../ui/buttons";
import renderTextField from "../../ui/render_text_field";


/*
* Form component for updating information in the "about" page
* @extends Component
*/
class AboutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasSaved: false
        };

        // Bind this to functions
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderTextField = renderTextField.bind(this);
        this.toggleNotification = this.toggleNotification.bind(this);
    }

    /** Dispatch redux action to update page status and possibly init form */
    componentDidMount() {
        this.props.updateAdminPage("About");

        const about = this.props.about;
        if (about) {
            this.props.initialize(about);
        } else {
            this.props.showSite("about");
        }
    }

    handleSubmit(data) {
        this.props.updateSite("about", {data})
            .then(() => {
                this.toggleNotification();
            })
            .catch(response => {
                console.log(response);
            });
    }

    toggleNotification() {
        this.setState({
          notificationIsActive: !this.state.notificationIsActive
        });
    }

    render() {
        const savedButton = <SuccessButton value="Saved!" />;
        const saveButton = <SubmitButton value="Save" />;

        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <div className="head">
                    Edit About Page
                </div>
                <div className="inputs">
                    <Field
                        name="head"
                        title="Head"
                        element="input"
                        type="text"
                        component={this.renderTextField} />
                    <Field
                        name="detail"
                        title="Detail"
                        element="textArea"
                        type="text"
                        component={this.renderTextField} />
                    {this.state.hasSaved ? savedButton : saveButton}
                </div>
                <Notification
                    dismissAfter={5000}
                    isActive={this.state.notificationIsActive}
                    message="The about page was successfully saved.."
                    action="Dismiss"
                    title="Success!"
                    onDismiss={this.toggleNotification.bind(this)}
                    onClick={() =>  this.setState({
                        notificationIsActive: false
                    })}
                />
            </form>
        );
    }
}

export default AboutForm;

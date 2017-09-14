import React, { Component } from "react"
import ReactModal from "react-modal"
import { Field } from "redux-form"
import {
    CancelButton,
    DangerButton,
    SubmitButton,
    SuccessButton
} from "../../ui/buttons"
import renderTextField from "../../ui/render_text_field"


/*
* Form component for creating new links and updating existing ones
* @extends Component
*/
class LinkForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsVisible: false
        }

        // Bind this to functions
        this.deleteLink = this.deleteLink.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
        this.handleOpenModal = this.handleOpenModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderTextField = renderTextField.bind(this)
        this.updateLink = this.updateLink.bind(this)
    }

    /** If page object was found in store, init the redux form else fetch it */
    checkLink() {
        const match = this.props.match
        const isEditForm = match && match.params["link_id"]

        if (!this.state.link && isEditForm) {
            const linkId = match.params["link_id"]
            const link = this.props.links[linkId]

            if (link) {
                this.setState({link})
                this.props.initialize(link)
            } else {
                this.props.showLink(linkId)
            }
        }
    }

    /** Dispatch redux action to update page status and possibly init form */
    componentDidMount() {
        this.props.updateAdminPage("Links")
        this.props.initialize({
            title: "",
            href: ""
        })
        this.checkLink()
    }

    /** Check if page object is in the redux store on update */
    componentDidUpdate() {
        this.checkLink()
    }

    createLink(data) {
        this.props.createLink({link: data})
            .then(() => {
                this.props.history.push("/admin/links")
            })
            .catch(response => {

            })
    }

    deleteLink() {
        this.props.deleteLink(this.state.link._id)
            .then(() => {
                this.props.history.push("/admin/links")
            })
            .catch(response => {

            })
        this.handleCloseModal()
    }

    /** Update state to reflect that the delete modal is closed */
    handleCloseModal() {
        this.setState({
            modalIsVisible: false
        })
    }

    /** Update state to reflect that the delete modal is opened */
    handleOpenModal() {
        this.setState({
            modalIsVisible: true
        })
    }

    /** Handle a validated redux form submission of the form */
    handleSubmit(data) {
        // If the form is modifying an existing link, update it. Else create it
        const formLink = this.state.link
        if (formLink) {
            this.updateLink(formLink._id, data)
        } else {
            this.createLink(data)
        }
    }

    updateLink(linkId, data) {
        this.props.updateLink(linkId, {link: data})
            .then(() => {

            })
            .catch(response => {

            })
    }

    render() {
        let head = this.state.link ? "Edit Link" : "New Link"
        const savedButton = <SuccessButton value="Saved!" />
        const saveButton = <SubmitButton value="Save" />

        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <div className="head">
                    {head}
                </div>
                <div className="inputs">
                    <Field
                        name="title"
                        title="Title"
                        element="input"
                        type="text"
                        component={this.renderTextField} />
                    <Field
                        name="href"
                        title="href"
                        element="input"
                        type="text"
                        component={this.renderTextField} />
                    <DangerButton
                        value="Delete"
                        onClick={this.handleOpenModal} />
                    {this.state.hasSaved ? savedButton : saveButton}
                    <CancelButton
                        redirect={
                            () => this.props.history.push("/admin/links")
                        } />
                </div>
                <ReactModal
                   isOpen={this.state.modalIsVisible}
                   contentLabel="Delete Link" >
                   <div className="head">
                        Delete Link
                   </div>
                   <p>
                       Are you sure you want to delete this document?
                       This cannot be undone.
                   </p>
                   <DangerButton
                        value="Delete"
                        onClick={this.deleteLink} />
                    <CancelButton
                         onClick={this.handleCloseModal} />
                </ReactModal>
            </form>
        )
    }
}


export default LinkForm

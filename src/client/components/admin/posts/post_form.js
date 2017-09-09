import React, { Component } from "react"
import { Field } from "redux-form"
import { CancelButton, SubmitButton, SuccessButton } from "../../ui/buttons"
import renderTextField from "../../ui/render_text_field"


/*
* @extends Component
*/
class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        // Bind this to functions
        this.checkPost = this.checkPost.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderTextField = renderTextField.bind(this)
    }

    checkPost() {
        if (!this.state.post && this.props.match) {
            const postId = this.props.match.params["post_id"]
            const post = this.props.posts[postId]

            if (post) {
                this.setState({post})
                this.props.initialize(post)
            } else {
                this.props.showPost(postId)
            }
        }
    }

    componentDidMount() {
        this.props.updateAdminPage("Posts")
        this.checkPost()
    }

    componentDidUpdate() {
        this.checkPost()
    }

    handleSubmit() {

    }

    render() {
        let head = this.state.post ? "Edit Post" : "New Post"
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
                        name="preview"
                        title="Preview"
                        element="textArea"
                        type="text"
                        component={this.renderTextField} />
                    {this.state.hasSaved ? savedButton : saveButton}
                </div>
            </form>
        )
    }
}

export default PostForm

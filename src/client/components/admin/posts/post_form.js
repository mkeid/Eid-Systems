import React, { Component } from "react"
import PropTypes from "prop-types"
import { Field } from "redux-form"
import { CancelButton, SubmitButton, SuccessButton } from "../../ui/buttons"
import renderTextField from "../../ui/render_text_field"


/*
* Form component for creating new posts and updating existing ones
* @extends Component
*/
class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        // Bind this to functions
        this.checkPost = this.checkPost.bind(this)
        this.createPost = this.createPost.bind(this)
        this.deletePost = this.deletePost.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderTextField = renderTextField.bind(this)
        this.updatePost = this.updatePost.bind(this)
    }

    /** If page object was found in store, init the redux form else fetch it */
    checkPost() {
        const match = this.props.match
        const isEditForm = match && match.params["post_id"]

        if (!this.state.post && isEditForm) {
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

    /** Dispatch redux action to update page status and possibly init form */
    componentDidMount() {
        this.props.updateAdminPage("Posts")
        this.checkPost()

        this.props.initialize({
            title: "", preview: "", description: ""
        })
    }

    /** Check if page object is in the redux store on update */
    componentDidUpdate() {
        this.checkPost()
    }

    createPost(data) {
        this.props.createPost({post: data})
            .then(() => {
                this.context.router.history.push("/admin/posts")
            })
            .catch(response => {

            })
    }

    deletePost() {
        this.props.deletePost(this.state.post._id)
            .then(() => {
                this.context.router.history.push("/admin/posts")
            })
            .catch(response => {

            })
    }

    handleSubmit(data) {
        // If the form is modifying an existing post, update it. Else create it
        const formPost = this.state.post
        if (formPost) {
            this.updatePost(formPost._id, data)
        } else {
            this.createPost(data)
        }
    }

    updatePost(postId, data) {
        this.props.updatePost(postId, {post: data})
            .then(() => {

            })
            .catch(response => {

            })
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


// Enable the router context type so that the form gains routing capability
PostForm.contextTypes = {
    router: PropTypes.object
}


export default PostForm

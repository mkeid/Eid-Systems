import React, { Component } from "react"

/** Return an input element object for redux form's Field component */
const renderTextField = function(field) {
    const warning = field.meta.touched && field.meta.error ? (
        <div className="warning">{field.meta.error}</div>
    ) : null

    const fieldAttribute = `${field.title.toLowerCase()}Input`

    const element = React.createElement(
        field.element,
        Object.assign(
            field.input,
            { type: field.type },
            { ref: input => { this[fieldAttribute] = input } }
        )
    )

    return (
        <div className="input">
            <div className="title">
                { field.title }
            </div>
            { warning }
            { element }
        </div>
    )
}

export default renderTextField

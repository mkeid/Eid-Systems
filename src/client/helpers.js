/** Convers a plain javascript object into an instance of FormData */
const convertToFormData = (data, objectName) => {
    const imageFile = data.imageFile[0]
    delete data.imageFile

    // Initialize the object that will be converted to the form data type
    let uploadData
    if (objectName) {
        // Assign the image file under a parent key for multer to process
        uploadData = Object.assign(
            {[objectName]: JSON.stringify(data)},
            {imageFile}
        )
    } else {
        uploadData = data
    }

    // Wrap our redux form data using the form data object
    const formData = new FormData();
    for (const key in uploadData) {
        formData.append(key, uploadData[key])
    }

    return formData
}

module.exports = {
    convertToFormData
}

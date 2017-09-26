/** Convers a plain javascript object into an instance of FormData */
const convertToFormData = (data, objectName) => {
    // Assign the image file under a parent key for multer to process
    const uploadData = Object.assign(
        {[objectName]: data}, {imageFile: data.imageFile[0]}
    )
    console.log(uploadData)

    // Wrap our redux form data using the form data object
    const formData = new FormData();
    for (const key in uploadData) {
        formData.append(key, uploadData[key]);
    }

    return formData
}

module.exports = {
    convertToFormData
}

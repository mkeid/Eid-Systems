import React, { Component } from "react";
import Dropzone from "react-dropzone";


const getFileBlob = (url, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.addEventListener('load', () => {
        cb(xhr.response);
    });
    xhr.send();
};


const blobToFile = (blob, name) => {
    blob.lastModifiedDate = new Date();
    blob.name = name;
    blob.preview = name;
    return blob;
};


const getFileObject = (filePathOrUrl, callback) => {
    getFileBlob(filePathOrUrl, blob => {
        callback(blobToFile(blob, filePathOrUrl));
    });
};


const renderFileInput = field => {
    const files = field.input.value;
    const fileIsInDropzone = files && Array.isArray(files);

    const warning = field.meta.touched && field.meta.error ? (
        <div className="warning">{field.meta.error}</div>
    ) : null;
    const element = (
        <Dropzone
            className="dropzone"
            name={field.name}
            multiple={false}
            onDrop={file => field.input.onChange(file)}>

            {fileIsInDropzone ? (
              <img src={files[0].preview} />
            ) : "Drop a file here to upload."}

        </Dropzone>
    );

    return (
        <div className="input">
            <div className="title">
                {field.title}
            </div>
            {warning}
            {element}
        </div>
    );
}

export {
    getFileObject,
    renderFileInput
};

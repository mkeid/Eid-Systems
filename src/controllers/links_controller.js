const fs = require("fs");
const path = require("path");
const LinkModel = require("../models/link_model");
const appDir = path.dirname(require.main.filename);

module.exports = {
    /** Creates a new link document with specified attributes */
    create(request, response, next) {
        const { file, params } = request;
        const publicPath = "/images/" + file.originalname;
        const savePath = path.resolve(appDir + "/../public" + publicPath);

        // Attempt to save the document's image file
        fs.writeFile(savePath, file.buffer, error => {
            if (error) {
                next(error);
            }

            const linkData = JSON.parse(request.body.link);
            linkData.imgSrc = publicPath;
            const link = new LinkModel(linkData);

            link.save(error => {
                if (error) {
                    return next(error);
                }

                response.json(link);
            });
        });
    },

    /** Deletes a specified document from the links collection */
    destroy(request, response, next) {
        LinkModel.findByIdAndRemove(request.params.link_id,
            (error, raw) => {
                if (error) {
                    return next(error);
                }

                response.json(raw);
            }
        );
    },

    // Returns all documents from the links collection
    list(request, response, next) {
        LinkModel.find(
            (error, links) => {
                response.json({links});
            }
        );
    },

    /** Updates a specified link document */
    update(request, response, next) {
        const { file, params } = request;
        const publicPath = "/images/" + file.originalname;
        const savePath = path.resolve(appDir + "/../public" + publicPath);
        const link = JSON.parse(request.body.link);

        const updateLink = () => {
            const query = {"_id": request.params.link_id};

            LinkModel.updateOne(query, link,
                (error, raw) => {
                    if (error) {
                        next(error);
                    }

                    LinkModel.findOne({"_id": request.params.link_id},
                        (error, link) => response.json({link})
                    );
                }
            );
        };

        // Do not try to save the image file if it is already exists
        if (file.originalname === "blob") {
            updateLink();
        } else {
            // Attempt to save the document's image file
            fs.writeFile(savePath, file.buffer, error => {
                if (error) {
                    next(error);
                }

                link.imgSrc = publicPath;
                updateLink();
            });
        }
    }
};

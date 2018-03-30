const SiteModel = require("../models/site_model");

module.exports = {
    /** Returns all documents in the skills collection */
    list(request, response, next) {
        SiteModel.find(
            (error, siteDocs) => {
                const sites = siteDocs.reduce((previous, site) => {
                    previous[site.title] = site.data;
                    return previous;
                }, {});
                response.json({sites});
            }
        );
    },

    /** Returns a specified site document */
    show(request, response, next) {
        SiteModel.find({title: request.params.title},
            (error, site) => response.json({site})
        );
    },

    /** Updates a specified site document */
    update(request, response, next) {
        SiteModel.updateOne({title: request.params.title}, request.body,
            (error, raw) => {
                if (error) {
                    return next(error);
                }

                SiteModel.findOne({title: request.params.title},
                    (error, site) => response.json({
                        site: {
                            [request.params.title]: site.data
                        }
                    })
                );
            }
        );
    }
};

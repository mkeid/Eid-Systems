const SiteModel = require("../models/site_model")

module.exports = {
    // Returns all documents in the skills collection
    list(request, response, next) {
        SiteModel.find(
            (error, siteDocs) => {
                const sites = siteDocs.reduce((previous, site) => {
                    previous[site.title] = site.data
                    return previous
                }, {})
                response.json({sites})
            }
        )
    },

    show(request, response, next) {
        SiteModel.find({title: request.params.title},
            (error, site) => response.json({site})
        )
    }
}

const SiteModel = require("../models/site_model")

module.exports = {
    // Returns all documents in the skills collection
    list(request, response, next) {
        SiteModel.find(
            (error, sites) => {
                const siteObjects = sites.reduce((previous, site) => {
                    previous[site.title] = site.data
                    return previous
                }, {})
                response.json(siteObjects)
            }
        )
    },
}

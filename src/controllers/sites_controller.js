const SiteModel = require("../models/site_model")

module.exports = {
    // Returns all documents in the skills collection
    list(request, response, error) {
        if (error) {
            return next(error)
        }
        
        ((callback, limit) => {
            SiteModel.find(callback).limit(limit)
        })
        ((error, sites) => {
            const siteObjects = sites.reduce((previous, site) => {
                previous[site.title] = site.data
                return previous
            }, {})
            response.json(siteObjects)
        })
    },
}

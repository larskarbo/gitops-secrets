/* No fs variant by excluding secret-files */
module.exports = require("./secrets");
module.exports.providers = {
    doppler: require("./providers/doppler"),
};

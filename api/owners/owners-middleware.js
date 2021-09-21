const Owner = require("./items-model");


function validateOwner(req, res, next) {
    Owner.getById()
}

function validateOwnerId(req, res, next) {
    Owner.getById()
}
module.exports = {validateOwner, validateOwnerId}

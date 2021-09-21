const Item = require("./items-model");


function validateItem(req, res, next) {
    Item.getById()
}

function validateItemId(req, res, next) {
    Item.getById()
}
module.exports = {validateItem, validateItemId}

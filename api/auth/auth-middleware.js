const Owner = require("../owners/owners-model");

function someMiddleWare1(req, res, next) {}
function someMiddleWare2(req, res, next) {}
function someMiddleWare3(req, res, next) {}

module.exports = { someMiddleWare1, someMiddleWare2, someMiddleWare3}


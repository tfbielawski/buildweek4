const db = require("../../database/dbConfig");

function get(){return db("items")}
function getBy(){return db("items")}
function getById(){return db("items")}
function insert(){return db("items")}
function update(){return db("items")}
function remove(){return db("items")}

module.exports = {get, getBy, getById, insert, update, remove}


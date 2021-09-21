const db = require("../../database/dbConfig");

function get(){return db("owners")}
function getBy(){return db("owners")}
function getById(){return db("owners")}
function insert(){return db("owners")}
function update(){return db("owners")}
function remove(){return db("owners")}

module.exports = {get, getBy, getById, insert, update, remove}


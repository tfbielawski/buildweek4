//get getbyid insert update delete
//pull, switch, git merge main

const db = require('../../data/db-config');

//Get all items
function get() {
    return db('items')
}

//Get an item by id
async function getById(id) {
    return db('items').where({id}).first()
}

//Insert an item into the table
async function insert(item) {
    const [id] = await db('items').insert(item)
    return db("items").where()
}

async function update(item) {
    await db('items')
    return item
}

async function remove(item) {
    await db('items')
    return item
}

module.exports = { get, getById, insert, update, remove}

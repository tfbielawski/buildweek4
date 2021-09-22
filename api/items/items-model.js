const db = require('../../data/db-config');

//Get all items
function get() {
    return db('items')
}

//Get an item by id
function getById(id) {
    return db('items').where("item_id",id).first()
}

//Update an item
async function update(item) {
    await db('items')
    return item
}

//Insert an item into the table
async function insert(item) {
    const [id] = await db('items').insert(item, "id")
    return db("items").where("item_id", id)
}


async function remove(item) {
    await db('items')
    return item
}

module.exports = { get, getById, insert, update, remove}

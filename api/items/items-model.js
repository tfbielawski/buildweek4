const db = require('../../data/db-config');
const {findById} = require("../auth/auth-model");

//Get all items
function get() {
    return db('items')
}

//Get an item by id
function getById(id) {
    return db('items').where("item_id",id).first()
}

//Update an item
async function update(id, itemBody) {
    await db('items')
        .update(itemBody)
        .where("item_id", id)
    return findById(id)
}


//Insert an item into the table
async function insert(item) {
    const [id] = await db('items').insert(item, "id")
    return db("items").where("item_id", id)
}



function remove(id,) {
    return db('items').where("item_id",id).first()
        .del()
}

module.exports = { get, getById, insert, update, remove}

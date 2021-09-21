const db = require('../../data/db-config');

function findBy(filter) {
    return db('users').where(filter)
}

function findById(id) {
    return db('users')
        .select('user_id', 'username', 'password')
        .where('user_id', id)
        .first()
}

async function add(user) {
    await db('users').insert(user)
    return user
}

module.exports = {
    findBy,
    findById,
    add,
}

exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable()
      users.string('password', 200).notNullable()
      users.timestamps(false, true)
    })
    .createTable('items', (column) => {
      column.increments('item_id')
      column.string('item_name', 200).notNullable()
      column.string('item_category', 200).notNullable()
      column.integer('item_price').notNullable()
      column.string('item_description', 200).notNullable()
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users')
  await knex.schema.dropTableIfExists('items')
}

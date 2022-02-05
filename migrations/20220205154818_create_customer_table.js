
exports.up = function(knex) {
  return knex.schema.createTable('customer', table => {
    table.string('id').primary()
    table.string('name').notNullable()
    table.string('phone')
    table.string('email')
    table.dateTime('createdAt').notNullable()
    table.dateTime('updatedAt').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('customer')
};

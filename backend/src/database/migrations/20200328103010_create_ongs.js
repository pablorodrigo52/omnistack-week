
exports.up = function(knex) { // criação
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable(); // second parameter = length of field
  });
};

exports.down = function(knex) { // rollback
  return knex.schema.dropTable('ongs');
};

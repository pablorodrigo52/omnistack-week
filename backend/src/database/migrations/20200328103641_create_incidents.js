
exports.up = function(knex) { // criação
    return knex.schema.createTable('incidents', function(table){
        table.increments(); // pk AI
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');
    });
  };
  
  exports.down = function(knex) { // rollback
    return knex.schema.dropTable('incidents');
  };
  
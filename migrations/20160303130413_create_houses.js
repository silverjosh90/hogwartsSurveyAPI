
exports.up = function(knex, Promise) {
  return knex.schema.createTable('houses', function(table){
    table.increments();
    table.string('name');
    table.string('imageUrl');
    table.string('traits');
    table.string('quote');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('houses');
};

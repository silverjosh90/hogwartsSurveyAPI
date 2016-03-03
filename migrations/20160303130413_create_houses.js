
exports.up = function(knex, Promise) {
  return knex.schema.createTable('houses', function(table){
    table.increments();
    table.string('name');
    table.string('imageUrl');
    table.string('description');
    table.string('attributes');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('houses');
};

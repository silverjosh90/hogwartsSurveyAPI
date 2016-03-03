
exports.up = function(knex, Promise) {
  return knex.schema.createTable('surveys', function(table){
    table.increments();
    table.string('gryffindor');
    table.string('slytherin');
    table.string('hufflepuff');
    table.string('ravenclaw');
    table.integer('user_id');
    table.integer('house_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('surveys');
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('surveys', function(table){
    table.increments();
    table.string('gryffindor');
    table.string('slytherin');
    table.string('hufflepuff');
    table.string('ravenclaw');
    table.bigint('fb_id');
    table.string('dominant_house');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('surveys');
};

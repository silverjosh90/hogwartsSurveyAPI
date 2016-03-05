
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.string('name');
    table.string('profilepicture');
    table.float('fb_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

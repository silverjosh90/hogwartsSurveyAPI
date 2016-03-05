var knex = require('../db/knex.js')

function users(){
  return knex('users')
}



function checkIfUser(fbid) {
  var derp;

  return users().select().where('fb_id', fbid).first()
}

module.exports = {
  hello: 'hello',
  checkIfUser: checkIfUser
}

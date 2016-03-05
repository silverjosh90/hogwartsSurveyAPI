var knex = require('../db/knex.js')

function users(){
  return knex('users')
}



function checkIfUser(fbid) {
  users().select().where(fb_id, fbid).then(function(results){
    console.log(results);
  })

}

module.exports = {
  checkIfUser: checkIfUser
}

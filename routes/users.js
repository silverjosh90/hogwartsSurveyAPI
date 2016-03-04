var express = require('express');
var apiRouter = express.Router();
var knex = require('../db/knex.js')

/* GET home page. */

function users() {
  return knex('users')
}

apiRouter.route('/users')
  .get(function(req,res){
    users().select().then(function(results){
      res.json(results)

    })
  })
  .post(function(req,res){
    console.log(req.body);
    users().insert(req.body).then(function(results){
      res.json({message: 'User created!'})
    })
  })

apiRouter.route('/users/:userid')
    .get(function(req,res){
      users().select().first().where('id',req.params.userid).then(function(results){
        res.json(results)
      })
    })
    .put(function(req,res){
      users().update(req.body).where('id',req.params.userid).then(function(rest){
        res.json({message: 'Updated User!'})
      })
    })
    .delete(function(req,res){
    users().delete().where('id', req.params.userid).then(function(results) {
      res.json({message:  "User Deleted"})
    })
  });

module.exports = apiRouter;

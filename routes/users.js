var express = require('express');
var apiRouter = express.Router();
var knex = require('../db/knex.js')

/* GET home page. */

function users() {
  return knex('users')
}

apiRouter.route('/')
  .get(function(req,res){
    console.log(req);
    // if(req.body.token == process.env.access_secret) {
    users().select().then(function(results){
      res.json(results)

    })
  // }
    else {
      res.json('Invalid token!!!')
    }
  })
  .post(function(req,res){

    if(req.body.token == process.env.access_secret) {
    users().insert({name: req.body.name, profilepicture: req.body.profilepicture, fb_id: req.body.fb_id}).then(function(results){
      res.json({message: 'User created!'})
    })
    }
    else{
      res.json({message: 'Invalid token!!!'})
    }
  })

apiRouter.route('/:userid')
    .get(function(req,res){
      users().select().first().where('id',req.params.userid).then(function(results){
        res.json(results)
      })
    })
    .put(function(req,res){
      users().update(req.body).where('id',req.params.userid).then(function(results){
        res.json({message: 'Updated User!'})
      })
    })
    .delete(function(req,res){
    users().delete().where('id', req.params.userid).then(function(results) {
      res.json({message:  "User Deleted"})
    })
  });

module.exports = apiRouter;

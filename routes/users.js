var express = require('express');
var apiRouter = express.Router();
var knex = require('../db/knex.js')
var server = require('../serverlogic/serverlogic.js')

/* GET home page. */

function users() {
  return knex('users')
}

apiRouter.route('/')
  .get(function(req,res){
    // if(req.body.token == process.env.access_secret) {
    users().select().then(function(results){

      res.json(results)

    })
  // }
  // else {
  //   res.json({message: "Invalid Token!!!!"})
  // }
  })
  .post(function(req,res){
    if(req.body.token == process.env.access_secret) {
    server.checkIfUser(req.body.fb_id).first().then(function(existingUser) {


    if (existingUser) {
      res.json({message: existingUser})
    }
    else {

    users().insert({firstname: req.body.firstname, lastname: req.body.lastname, profilepicture: req.body.profilepicture, fb_id: req.body.fb_id}).returning('id').then(function(results){
      var user = results[0]
      users().select().where('id', user).first().then(function(rest){

        res.json({message: rest})
      })

    })
  }
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

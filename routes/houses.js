var express = require('express');
var apiRouter = express.Router();
var knex = require('../db/knex.js')

/* GET home page. */

function houses() {
  return knex('houses')
}

apiRouter.route('/')
  .get(function(req,res){
    houses().select().then(function(results){
      res.json(results)

    })
  })
  .post(function(req,res){
    console.log(req.body);
    houses().insert(req.body).then(function(results){
      res.json({message: 'House created!'})
    })
  })

apiRouter.route('/:housesid')
    .get(function(req,res){
      houses().select().first().where('id',req.params.housesid).then(function(results){
        res.json(results)
      })
    })
    .put(function(req,res){
      houses().update(req.body).where('id',req.params.housesid).then(function(rest){
        res.json({message: 'Updated house!'})
      })
    })
    .delete(function(req,res){
    houses().delete().where('id', req.params.housesid).then(function(results) {
      res.json({message: "House Deleted"})
    })
  });

module.exports = apiRouter;

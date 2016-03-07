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

  apiRouter.route('/:housesname')
      .get(function(req,res){
        console.log('getting here!');
        houses().select().first().where('dominant_house',req.params.housesname).then(function(results){
          console.log('hello from the dominant house');
          res.json({message: 'Its there!'})
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

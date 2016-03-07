var express = require('express');
var apiRouter = express.Router();
var knex = require('../db/knex.js')

/* GET home page. */

function surveys() {
  return knex('surveys')
}

apiRouter.route('/')
  .get(function(req,res){
    surveys().select().then(function(results){
      res.json(results)

    })
  })
  .post(function(req,res){
    surveys().insert({gryffindor: req.body.gryffindor, slytherin: req.body.slytherin, hufflepuff: req.body.hufflepuff, ravenclaw: req.body.ravenclaw, fb_id: req.body.zfbId, dominant_house: req.body.dominantHouse }).then(function(results){
      res.json({message: 'Survey created!'})
    })
  })

apiRouter.route('/:surveysname')
    .get(function(req,res){
      surveys().select().first().where('dominant_house',req.params.surveysname).then(function(results){
        console.log(results);
        res.json(results)
      })
    })
    .put(function(req,res){
      surveys().update(req.body).where('id',req.params.surveysid).then(function(rest){
        res.json({message: 'Survey created!'})
      })
    })
    .delete(function(req,res){
    surveys().delete().where('id', req.params.surveysid).then(function(results) {
      res.json({message: "Survey Deleted"})
    })
  });

module.exports = apiRouter;

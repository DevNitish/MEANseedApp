/** All you raoutes and API calls here */
var express=require('express');
var USER=require('../models/user.js');
var path =require('path');

router =express.Router();

// this is a basic route to insert a data (user) in DB
router.post('/insertOne', function(req, res) {
    console.log("here");
  USER.insertOne({}, function(err, result) {
    if (err) {
        console.log("Error");
      res.staus(500).send('Internal error occurred');
    } else {
      console.log("Inserted",result);

      res.send(result);
    }
  });
});

module.exports = router;
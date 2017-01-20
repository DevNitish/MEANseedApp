var express=require('express');
var USER=require('../models/user.js');
var path =require('path');

router =express.Router();


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
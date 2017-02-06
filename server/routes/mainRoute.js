/** All you raoutes and API calls here */
var express=require('express');
var USER=require('../models/user.js');
var path =require('path');

router =express.Router();

// this is a basic route to insert a data (user) in DB
router.post('/saveUser', function(req, res,next) {

  USER.saveUser(req.body, function(err, result) {
    if (result) {
            console.log("Inserted");

      res.send(result);
        
    } else {
      console.log("Error");
       
      res.status(500).send('Internal error occurred--500');
    }
  });
});
router.post('/editUser', function(req, res,next) {
    console.log("here",req.body);

  USER.editUser(req.body, function(err, result) {
    if (result) {
            console.log("Edited",result);

      res.send(result);
        
    } else {
      console.log("Error");
       
      res.status(500).send('Internal error occurred--500');
    }
  });
});
router.post('/deleteUser', function(req, res,next) {
    console.log("here deleteUser",req.body);

  USER.deleteUser(req.body._id, function(err, result) {
    if (result) {
            console.log("Deleted!");

      res.send(result);
        
    } else {
      console.log("Error");
       
      res.status(500).send('Internal error occurred--500');
    }
  });
});

router.get('/getUser', function(req, res){
        USER.findAllUser( function(err, result) {
    if (result) {
      res.send(result);
        
    } else {
      console.log("Error");
       
      res.status(500).send('Internal error occurred--500');
    }
  });
});

module.exports = router;
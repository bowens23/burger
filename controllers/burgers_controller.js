var express = require("express");
var burger = require("../models/burger.js")
var router = express.Router();


router.get("/", function(req, res) {
  burger.show(function(data){
    res.render("index", { burger: data });
    //this burgers is going into handlebars.  it is going to be part of a for each thing there.
  })
});



router.post("/", function(req, res) {
    burger.add(req.body.burger, function(){
    	console.log ("thrying to post burger")
      console.log(req.body.burger)
      return res.redirect("/");
    })
});


router.put("/:id", function(req, res) {
  burger.update(req.body.id, function(){
console.log("made it to controller file")
    return res.redirect("/");
  })
});
  

module.exports = router;

//first it starts with handlebars.
//next you go to controller looks for path name.handelbars to burgers to controler (based on path name)

//req.body.burger, 
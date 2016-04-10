var db = require('../db/dbObject.js');

module.exports = {
  //functions go here in the following format:
  /*
  search: function(req, res){
  //stuf...
  res.send()....
}
  */
  search: function(req, res){
    console.log('called search');
    var found = false;
    console.log(req.body.zip);
    for(var i = 0; i < db.stories.length; i++){
      console.log(db.stories[i].zip);
      console.log(db.stories[i].zip === req.body.zip);
      if(Number(db.stories[i].zip) === Number(req.body.zip)){
        console.log('found zip', db.stories[i].zip);
        found = true;
        console.log(db.stories[i].zip);
      }
    }
    res.send(found);
  }
}

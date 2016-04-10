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
    var found = false;
    for(var i = 0; i < db.stories.length; i++){
      if(Number(db.stories[i].zip) === Number(req.body.zip)){
        found = true;
      }
    }
    res.send(found);
  }
}

var db = require(../db/dbObject.js);

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
      if(db.stories[i].zip === req.data){
        console.log('found zip', db.stories[i].zip);
        found = true;
      }
    }
    res.send(found);
  }
}

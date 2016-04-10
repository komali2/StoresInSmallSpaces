var homecontroller = require('./homeController');

module.exports = function(app){
  //call functions as follows:
  /*
    app.post('/search', homecontroller.search);
  */
  app.post('/search', homecontroller.search);
}

var mongo = require('mongodb').MongoClient;

var dbname = process.argv[2];
var url = 'http://localhost://21017/' + dbname;

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var collection = db.collection('users')
  collection.update({
    username: "tinatime"
  }, {
    $set: {
      age: 40
    }
  }, function(err) {
      if (err) throw err;
      db.close();
  })
})

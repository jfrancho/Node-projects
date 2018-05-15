var mongo = require('mongo').MongoClient;

var db = process.argv[2];
var collectionName = process.argv[3];
var _id = process.argv[4];

var url = 'http://localhost://21017' + db;

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var collection = db.collection(collectionName)
  collection.remove({
    id: _id
  }, function(err) {
    if (err) throw error;
  })
  db.close();
})

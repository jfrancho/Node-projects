var mongo = require('mongodb').MongoClient;

var firstname = process.argv[2];
var lastname = process.argv[3];
var doc = {
  firstname: firstname,
  lastname: lastname
};

var url = 'mongodb://localhost://27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var collection = db.collection('docs');
  collection.insert(doc, function(err, data) {
    if (err) throw err;
    console.log(JSON.stringify(doc));
    db.close();
  })
})

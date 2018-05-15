var mongo = require('mongodb').MongoClient;

var ageMin = parseInt(process.argv[2]);
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, client) {
  if (err) throw err;
  const db = client.db('learnyoumongo');
  var parrots = db.collection('parrots');
  parrots.find({
    age: {
      $gt: ageMin
    };
  }).toArray(function(err, docs) {
    if (err) throw err;
    console.log(docs)
    db.close();
  });
});

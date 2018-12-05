const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err) {
    return  console.log('Unable to connect to Mongodb Server');
  }
  console.log('Connected to Mongodb Server');

  db.collection('Users').findOneAndUpdate({
    // _id: new ObjectID('5c06ce4d2963bbc38dab4c3e')
    text: 'Eat lunch'
  }, {
    $set: {
      text: 'Something New'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});

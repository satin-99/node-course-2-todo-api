const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err) {
    return  console.log('Unable to connect to Mongodb Server');
  }
  console.log('Connected to Mongodb Server');

  db.collection('Users').find({name: SATIN SUNIL JAIN}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));
  }, (err) => {
      console.log('Unable to fetch Todos',err);
  })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //     console.log('Unable to fetch Todos',err);
  // })

  // db.close();
});

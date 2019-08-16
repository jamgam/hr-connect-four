const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const uri = "mongodb://127.0.0.1:27017";
const dbName = 'test'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect((err, client) => {
  // const collection = client.db("test").collection("devices");
  assert.equal(null, err);

  const db = client.db(dbName);
  // db.collection('myCollection').find({}, (err, result)=>{
  //   console.log('result: ', result);
  //   client.close();
  // });
  db.collection('myCollection').find({test:2}).toArray((err, result) => {
    console.log(result);
    client.close();
  })
});
const MongoClient = require('mongodb').MongoClient;

module.exports.connectToMongo = async function connectToMongo(dbName){
    const url = 'mongodb://localhost:27017';

    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        const db = await client.db(dbName);
        return [client, db]

    } catch (e) {
        console.error(e);
        await client.close();
    }
  }

module.exports.closeMongo = async function closeMongo(client) {
  await client.close();
}

module.exports.insertDocument = async function insertDocument(db, collection, listing) {
  try {
    const result = await db.collection(collection).insertOne(listing);
    return result
  } catch (e) {
    console.error(e);
    return e
  }

}

module.exports.queryCollection = async function queryCollection(db, collection, query) {
  try {
    const result = await db.collection(collection).findOne(query);
    return result
  } catch (e) {
    console.error(e);
    return e
  }
}

module.exports.updateDocument = async function updateDocument(db, collection, query, replacement) {
  try {
    const result = await db.collection(collection).replaceOne(
      query,
      replacement
    );
    return result
  } catch (e) {
    console.error(e);
    return e
  }
}

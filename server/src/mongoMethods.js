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

module.exports.insertDocuments = async function insertDocuments(db, collection, listings) {
  try {
    const result = await db.collection(collection).insertMany(listings);
    return result
  } catch (e) {
    console.error(e);
    return e
  }
}

module.exports.queryCollection = async function queryCollection(db, collection, query) {
  try {
    const result = await db.collection(collection).find(query).toArray();
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

module.exports.deleteDocument = async function deleteDocument(db, collection, query) {
  try {
    const result = await db.collection(collection).deleteOne(query);
    return result
  } catch (e) {
    console.error(e);
    return e
  }
}

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

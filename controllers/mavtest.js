const mongodb = require('mongodb');
const fs = require('fs');
require('dotenv').config()
const client = new mongodb.MongoClient(process.env.MONGO_URI);
const db = client.db('myFirstDatabase');
const bucket = new mongodb.GridFSBucket(db, { bucketName: 'petImages' });
async function gridUpload(req, res) {
    await client.connect();
    fs.writeFileSync('./inputImage.png', req.body[0][0]);
    fs.createReadStream('./inputImage.png').
        pipe(bucket.openUploadStream('myFile', {
            chunkSizeBytes: 10485760,
            metadata: { field: 'test' }
        }));
}
async function gridGet() {
    try {
        bucket.openDownloadStream(mongodb.ObjectId("621edb5dc4610faf4c5975a2")).
            pipe();
    } catch (error) {

    }
}
module.exports = { gridUpload, gridGet };
const mongodb = require('mongodb');
const client = new mongodb.MongoClient();
const db = client.db('myFirstDatabase');
const bucket = new mongodb.GridFSBucket(db, { bucketName: 'myCustomBucket' });
function gridUpload(file) {
    bucket.openUploadStream(file, {
        chunkSizeBytes: 1048576,
        metadata: { field: 'test', value: 'firstImg' }
    })
}
module.exports = gridUpload;
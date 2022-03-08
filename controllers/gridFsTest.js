const mongodb = require('mongodb');
const fs = require('fs');
require('dotenv').config();
const client = new mongodb.MongoClient(process.env.MONGO_URI);
const db = client.db('myFirstDatabase');
const bucket = new mongodb.GridFSBucket(db, { bucketName: 'petImages' });

async function imgGridUpload(req, res) {
    await client.connect();
    bucket.drop();
    await req.body.petImages.forEach(image => {
        const imgId = (mongodb.ObjectId()).toString();
        req.body.petInfo.IMG.push(imgId);
        fs.writeFileSync('./inputImage.png', image);
        fs.createReadStream('./inputImage.png').
            pipe(bucket.openUploadStream(imgId, {
                chunkSizeBytes: 10485760
            }));
    })
    await db.collection('pets').insertOne(req.body.petInfo);
    fs.unlinkSync('./inputImage.png');
}

async function getGridImgs(req, res) {
    try {
        await client.connect();
        const cursor = bucket.find({});
        const data = [];
        await cursor.forEach(doc => data.push(doc));
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

async function getGridImg(req, res) {
    try {
        await client.connect();
        await bucket.openDownloadStreamByName(await req.params.id).pipe(await res);
        res.status(201);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}
module.exports = { imgGridUpload, getGridImgs, getGridImg };
const mongodb = require('mongodb');
const fs = require('fs');
require('dotenv').config();
const client = new mongodb.MongoClient(process.env.MONGO_URI);
const db = client.db('myFirstDatabase');
const bucket = new mongodb.GridFSBucket(db, { bucketName: 'petImages' });

async function petUpload(req, res) {
    await client.connect();
    const pet = await req.body;
    pet.IMG = [];
    await req.files.img.forEach(image => {
        const imgId = (mongodb.ObjectId()).toString();
        pet.IMG.push(imgId);
        fs.writeFileSync('./inputImage.png', image.data, { encoding: 'base64' });
        fs.createReadStream('./inputImage.png').
            pipe(bucket.openUploadStream(imgId, {
                chunkSizeBytes: 10485760
            }));
    })
    await db.collection('pets').insertOne(pet);
    fs.unlinkSync('./inputImage.png');
    res.redirect('/adminPets');
}

async function petDelete(req, res) {
    try {
        await client.connect();
        // await bucket.find({ filename: await req.params.id }).forEach(doc => bucket.delete(doc._id));
        // await db.collection('pets').findOneAndDelete({ _id: req.params.id });
        res.send('test');
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

async function getGridImgs(req, res) {
    try {
        await client.connect();
        const data = [];
        await bucket.find({}).forEach(doc => data.push(doc));
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

async function getGridImg(req, res) {
    try {
        await client.connect();
        const data = [];
        await bucket.find({ filename: await req.params.id }).forEach(doc => data.push(doc));
        if (!data.length) return res.status(404).json({ msg: 'URL path does not exist' });
        await bucket.openDownloadStreamByName(await req.params.id).pipe(await res);
        res.status(201);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}
module.exports = { petUpload, petDelete, getGridImgs, getGridImg };
const model = require('../models/petModel');

const getAll = async (req, res) => {
    try {
        const pets = await model.find({});
        res.status(201).json({ pets });
    } catch (error) { res.status(500).json({ msg: error }) }
}

const deleteAll = async (req, res) => {
    try {
        const products = await Product.deleteMany({});
        res.status(201).json({ products });
    } catch (error) { res.status(500).json({ msg: error }) }
}

const get = async (req, res) => {
    try {
        const pet = await model.findById(req.params.id).exec();
        res.status(201).json({ pet });
    } catch (error) { res.status(500).json({ msg: error }) }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const newPet = req.body;
        const pet = await model.findOneAndUpdate({ _id: id }, newPet);
        res.status(201).json({ newPet });
    } catch (error) { res.status(500).json({ msg: error }) }
}

// const deleteIt = async (req, res) => {
//     try {
//         const pet = await model.findByIdAndRemove(req.params.id);
//         res.status(201).json({ pet });
//     } catch (error) { res.status(500).json({ msg: error }) }
// }

module.exports = { getAll, deleteAll, get, update };


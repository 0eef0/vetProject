const model = require('../models/petModel');

const getAll = async (req, res) => {
    try {
        const pets = await model.find({});
        res.status(201).json({ pets });
    } catch (error) { res.status(500).json({ msg: error }) }
}

const get = async (req, res) => {
    try {
        const pet = await model.findById(req.params.id).exec();
        res.status(201).json({ pet });
    } catch (error) { res.status(500).json({ msg: error }) }
}

module.exports = { getAll, get };
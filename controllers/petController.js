const model = require('../models/petModel')

const getAll = async (req, res) => {
    try {
        const products = await model.find({});
        res.status(201).json({products});
    } catch (error) { res.status(500).json({msg: error}) }
}

// const deleteAll = async (req, res) => {
//     try {
//         const products = await Product.deleteMany({});
//         res.status(201).json({products});
//     } catch (error) { res.status(500).json({msg: error}) }
// }

const create = async (req, res) => {
    try {
        const product = await model.create(req.body);
        res.status(201).json({product});
    } catch (error) { res.status(500).json({msg: error}) }
}

const get = async (req, res) => {
    try {
        const product = await model.findById(req.params.id).exec();
        res.status(201).json({product});
    } catch (error) { res.status(500).json({msg: error}) }
}

const update = async (req, res) => {
    try {
        const {id} = req.params;
        const newProduct = req.body;
        const products = await model.findOneAndUpdate({_id: id}, newProduct);
        res.status(201).json({products});
    } catch (error) { res.status(500).json({msg: error}) }
}

const deleteIt = async (req, res) => {
    try {
        const product = await model.findByIdAndRemove(req.params.id);
        res.status(201).json({product});
    } catch (error) { res.status(500).json({msg: error}) }
}

module.exports = { getAll, create, get, update, deleteIt };


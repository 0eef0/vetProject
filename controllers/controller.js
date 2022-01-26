const Product = require('../models/model')

const getAll = async (req, res) => {
    try {
        const products = await Product.find({});
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
        const product = await Product.create(req.body);
        res.status(201).json({product});
    } catch (error) { res.status(500).json({msg: error}) }
}

const get = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).exec();
        res.status(201).json({product});
    } catch (error) { res.status(500).json({msg: error}) }
}

const update = async (req, res) => {
    try {
        const {id} = req.params;
        const newProduct = req.body;
        const products = await Product.findOneAndUpdate({_id: id}, newProduct);
        res.status(201).json({products});
    } catch (error) { res.status(500).json({msg: error}) }
}

const deleteIt = async (req, res) => {
    try {
        const product = await Product.findByIdAndRemove(req.params.id);
        res.status(201).json({product});
    } catch (error) { res.status(500).json({msg: error}) }
}

module.exports = { getAll, create, get, update, deleteIt };


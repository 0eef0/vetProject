const application = require('../models/petModel')

const getAllTwo = async (req, res) => {
    try {
        const products = await application.find({});
        res.status(201).json({products});
    } catch (error) { res.status(500).json({msg: error}) }
}

// const deleteAll = async (req, res) => {
//     try {
//         const products = await Product.deleteMany({});
//         res.status(201).json({products});
//     } catch (error) { res.status(500).json({msg: error}) }
// }

const createTwo = async (req, res) => {
    try {
        const product = await application.create(req.body);
        res.status(201).json({product});
    } catch (error) { res.status(500).json({msg: error}) }
}

const getTwo = async (req, res) => {
    try {
        const product = await application.findById(req.params.id).exec();
        res.status(201).json({product});
    } catch (error) { res.status(500).json({msg: error}) }
}

const updateTwo = async (req, res) => {
    try {
        const {id} = req.params;
        const newProduct = req.body;
        const products = await application.findOneAndUpdate({_id: id}, newProduct);
        res.status(201).json({products});
    } catch (error) { res.status(500).json({msg: error}) }
}

const deleteItTwo = async (req, res) => {
    try {
        const product = await application.findByIdAndRemove(req.params.id);
        res.status(201).json({product});
    } catch (error) { res.status(500).json({msg: error}) }
}

module.exports = { getAllTwo, createTwo, getTwo, updateTwo, deleteItTwo };


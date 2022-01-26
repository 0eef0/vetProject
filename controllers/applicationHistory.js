const History = require('../models/petModel')

const getAllThree = async (req, res) => {
    try {
        const products = await History.find({});
        res.status(201).json({products});
    } catch (error) { res.status(500).json({msg: error}) }
}

// const deleteAll = async (req, res) => {
//     try {
//         const products = await Product.deleteMany({});
//         res.status(201).json({products});
//     } catch (error) { res.status(500).json({msg: error}) }
// }

const createThree = async (req, res) => {
    try {
        const product = await History.create(req.body);
        res.status(201).json({product});
    } catch (error) { res.status(500).json({msg: error}) }
}

const getThree = async (req, res) => {
    try {
        const product = await History.findById(req.params.id).exec();
        res.status(201).json({product});
    } catch (error) { res.status(500).json({msg: error}) }
}

const updateThree = async (req, res) => {
    try {
        const {id} = req.params;
        const newProduct = req.body;
        const products = await History.findOneAndUpdate({_id: id}, newProduct);
        res.status(201).json({products});
    } catch (error) { res.status(500).json({msg: error}) }
}

const deleteItThree = async (req, res) => {
    try {
        const product = await History.findByIdAndRemove(req.params.id);
        res.status(201).json({product});
    } catch (error) { res.status(500).json({msg: error}) }
}

module.exports = { getAllThree, createThree, getThree, updateThree, deleteItThree };


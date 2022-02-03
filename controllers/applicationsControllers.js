const applicationModel = require('../models/application')

const getAllTwo = async (req, res) => {
    try {
        const applications = await applicationModel.find({});
        res.status(201).json({applications});
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
        const application = await applicationModel.create(req.body);
        res.status(201).json({application});
    } catch (error) { res.status(500).json({msg: error}) }
}

const getTwo = async (req, res) => {
    try {
        const application = await applicationModel.findById(req.params.id).exec();
        res.status(201).json({application});
    } catch (error) { res.status(500).json({msg: error}) }
}

const updateTwo = async (req, res) => {
    try {
        const {id} = req.params;
        const newApplication = req.body;
        const application = await applicationModel.findOneAndUpdate({ _id: id }, newApplication);
        res.status(201).json({newApplication});
    } catch (error) { res.status(500).json({msg: error}) }
}

const deleteItTwo = async (req, res) => {
    try {
        const application = await applicationModel.findByIdAndRemove(req.params.id);
        res.status(201).json({application});
    } catch (error) { res.status(500).json({msg: error}) }
}

module.exports = { getAllTwo, createTwo, getTwo, updateTwo, deleteItTwo };
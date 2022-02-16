const applicationModel = require('../models/application')

const getAllApplications = async (req, res) => {
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

// const createApplication = async (app = {}, req, res) => {
//     try {
//         const application = await applicationModel.create(app);
const createApplication = async (req, res) => {
    console.log(req.body)
    try {
        const application = await applicationModel.create(req.body);
        console.log(application)
        res.status(201).json({application});
    } catch (error) { res.status(500).json({msg: error}) }
}

const getApplication = async (req, res) => {
    try {
        const application = await applicationModel.findById(req.params.id).exec();
        res.status(201).json({application});
    } catch (error) { res.status(500).json({msg: error}) }
}

const updateApplication = async (req, res) => {
    try {
        const {id} = req.params;
        const newApplication = req.body;
        const application = await applicationModel.findOneAndUpdate({ _id: id }, newApplication);
        res.status(201).json({newApplication});
    } catch (error) { res.status(500).json({msg: error}) }
}

const deleteApplication = async (req, res) => {
    try {
        const application = await applicationModel.findByIdAndRemove(req.params.id);
        res.status(201).json({application});
    } catch (error) { res.status(500).json({msg: error}) }
}

module.exports = { getAllApplications, createApplication, getApplication, updateApplication, deleteApplication };
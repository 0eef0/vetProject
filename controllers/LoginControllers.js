const createAccount = async (req, res) => {
    try {
        const Login = await applicationModel.create(req.body);
        res.status(201).json({application});
    } catch (error) { res.status(500).json({msg: error}) }
}
const getAllAccounts = async (req, res) => {
    try {
        const applications = await applicationModel.find({});
        res.status(201).json({applications});
    } catch (error) { res.status(500).json({msg: error}) }
}
const deleteAccount = async (req, res) => {
    try {
        const application = await applicationModel.findByIdAndRemove(req.params.id);
        res.status(201).json({application});
    } catch (error) { res.status(500).json({msg: error}) }
}
const updateAccount = async (req, res) => {
    try {
        const {id} = req.params;
        const newApplication = req.body;
        const application = await applicationModel.findOneAndUpdate({ _id: id }, newApplication);
        res.status(201).json({newApplication});
    } catch (error) { res.status(500).json({msg: error}) }
}


module.exports = {
    createAccount,
    getAllAccounts,
    deleteAccount,
    updateAccount
}
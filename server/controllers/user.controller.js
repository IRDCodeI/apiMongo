const User = require('../models/users');
const userController = {};

userController.getUsers = async(req, res) => {     
    const user = await User.find();
    //res.json({ status: 'Listado Gastos '});  
    res.json(user);
}  

userController.createUser = async(req, res) => {     
    const user = new User(req.body);
    //console.log(gasto);
    await user.save();
    res.json('status: Usuario guardado')
}

userController.getUser = async(req, res) => {
    const {id} = req.params;
    const user = await User.find({email: `${id}`});
    res.json(user);
};

userController.editUser = async(req, res) => {
    const {id} = req.params;
    const user = {
        username: req.body.username,
        user: req.body.user,
        password: req.body.password,
        email: req.body.email,
        type: req.body.type
    }
    await User.findByIdAndUpdate(id, {$set:user}, {new:true});
    res.json('status: Gasto actualizado');
}

/* userController.getUserId = async(req,res) => {      
    //console.log(req.params.id);
    const user = await User.findById(req.params.id);
    res.json(user);
}  

userController.editUser = async(req, res) => {      
    const {id} = req.params;
    const user = {
        username: req.body.username,
        user: req.body.user,
        password: req.body.password,
        email: req.body.email
    };
    await User.findByIdAndUpdate(id, {$set:gasto}, {new:true});
    res.json('status: Gasto actualizado');
}      

userController.deleteUser = async(req, res) => {  
    const {id} = req.params;
    await Gasto.findByIdAndDelete(id);
    res.json('status: Usuario Eliminado');
}  

gastosController.findByType = async(req, res) => {
    const {id} = req.params;
    const gasto = await Gasto.find({tipo: `${id}`});
    res.json(gasto);
}
*/ 

module.exports = userController; 
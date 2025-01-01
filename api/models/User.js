const mongoose = require('mongoose');
const {Schema,model } = mongoose;

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true,
        minlength:3
    },
    password: {type:String,required:true}
})

const UserModel = model('User',userSchema);

module.exports = UserModel;
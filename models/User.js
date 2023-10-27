import mongoose from "mongoose";
const UserScehma = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role:{
        type: String,
        enums:['user','admin'],
        default: 'user'
    },
    status:{
        type: String,
        enums:['active','inactive'],
        default: 'inactive'
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
    type:String,
    required:true,
    match:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
    minlength:5
    },
    picturePath: {
        type: String,
        required: true
    }
}, {timestamps: true})

export default mongoose.model('User' , UserScehma)
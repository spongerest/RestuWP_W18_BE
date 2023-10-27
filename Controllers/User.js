import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const Register = async (req, res, next) => {
    try {
        const { name, email, password, picturePath } = req.body;

        if (password.length < 5) {
            res.status(400);
            throw new Error('Password must be at least 5 characters long');
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            res.status(400);
            throw new Error('Email is already in use');
        }

        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({ name, email, password: hashedPassword, picturePath });
        const savedUser = await user.save();

        return res.status(201).json({ message: 'Registration successful', user: savedUser });
    } catch (err) {
        next(err);
    }
}

export const Login = async (req, res, next) => {
    try {
        const { email, password, role } = req.body;
        let user;

        if (role === 'user') {
            user = await User.findOne({ email, role: 'user' });
        } else if (role === 'admin') {
            user = await User.findOne({ email, role: 'admin' });
        } else {
            return res.status(400).json({ message: 'Invalid role specified' });
        }

        if (!user) {
            return res.status(404).json(`${role.charAt(0).toUpperCase() + role.slice(1)} Not Found`);
        }

        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        if (email !== user.email || role !== user.role) {
            return res.status(401).json({ message: 'Invalid email or role' });
        }

        const token = jwt.sign({ id: user._id, role }, process.env.SECRET_KEY);
        if (user) {
            const { password, ...userRes } = user._doc;
            return res
                .status(201)
                .cookie('token', token, { httpOnly: true })
                .json({ user: userRes, role });
        }
    } catch (err) {
        next(err);
    }
}

export const getUsers = async (req, res, next) => {
    try {
        const user = await User.find()
        return res.status(201).json({user})
        } catch (err) {
        next(err);
        }
    };

export const UpdateUser = async (req,res,next) => {
        try{
            const { id } = req.params;
            const user = await User.findByIdAndUpdate(id, {...req.body}, {new: true})
    
            return res.status(201).json({user})
        }catch(err){
            next(err)
        }
    }
    
export const GetUser = async (req,res,next) => {
        try{
            const { id } = req.params
            const user = await User.findById(id)
    
            return res.status(201).json({user})
        }catch(err){
            next(err)
        }
    }

export const DeleteUser = async (req, res, next) => {
        try {
            const { id } = req.params;
            const deletedUser = await User.findByIdAndRemove(id);
    
            if (!deletedUser) {
                return res.status(404).json('User Not Found');
            }
    
            return res.status(200).json('User deleted successfully');
        } catch (err) {
            next(err);
        }
    };
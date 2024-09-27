import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from 'bcrypt';

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({success: false, message: "User does not exist" });
        }
        console.log(password,user)
        const isMatch = await bcrypt.compare(password, user.password);
        console.log(isMatch)
        if (!isMatch) {
            return res.status(400).json({success: false, message: "Invalid credentials" });
        }

        const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.status(200).json({ success: true, token, user:{id: user._id, name: user.name, role: user.role} });

    } catch (error) {
        res.status(500).json({success: false, message: error.message });
    }
}

const verifyUserAuth = async (req, res) => {
    return res.status(200).json({ success: true, user: req.user });
}

export { login, verifyUserAuth }
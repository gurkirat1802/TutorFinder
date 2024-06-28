const bcrypt = require('bcrypt');
const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const askaquestionuser = require('../Models/askaquestionuser');
const Review = require("../Models/reviewuser")
const becomeatutor = require("../Models/becomeatutor");
require("dotenv").config()
// Sign up route handler
exports.signup = async (req, res) => {
    try {
        // get data
        const { name, email, password, role } = req.body;
        //    console.log("sdf")
        // check if user already exist 
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User Already Exists",
            })
        }
        // Secured password 
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch (err) {
            return res.status(500).json({
                success: false,
                message: "Error in hashing password",
            })
        }

        // Create Entry for User
        let user = await User.create({
            name, email, password: hashedPassword, role
        });

        return res.status(200).json({
            success: true,
            message: "User Created Successfully",
            data: user
        });
    }
    catch (err) {
        console.error(err)
        return res.status(500).json({
            success: false,
            message: "User cannot be register,Please try again later",
        })
    }
}
/*     reviewss     */

exports.createReview = async (req, res) => {
    try {
        const { type, city, tutorName, tutorPhone, rating, description } = req.body;

        const newReview = new Review({
            type,
            city,
            tutorName,
            tutorPhone,
            rating,
            description,
        });
        await newReview.save();
        res.status(201).json({
            success: true,
            message: 'Review created successfully',
            data: newReview,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Server Error',
        });
    }
};

/*  ask a question  */
exports.askaquestion = async (req, res) => {
    try {
        const { tittle, description, topic } = req.body;
        let user = await askaquestionuser.create({
            tittle, description, topic
        });
        return res.status(200).json({
            success: true,
            message: "question submitted successfully",
            data: user
        });
    }
    catch (err) {
        console.error(err)
        return res.status(500).json({
            success: false,
            message: "question not subnitted",
        })
    }
}
exports.becomeatutor = async (req, res) => {
    try {
        const { fname, age, email, phone, qualification, subject, address, photo } = req.body;

        // Check if all required fields are provided
        if (!fname || !age || !email || !phone || !qualification || !subject || !address) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // Create the new tutor entry
        const user = await becomeatutor.create({ fname, age, email, phone, qualification, subject, address, photo });

        return res.status(200).json({
            success: true,
            message: "Teacher's data submitted successfully",
            data: user
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Teacher's data not submitted",
        });
    }
};

// Login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the details carefully",
            })
        }

        // check for register user 
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User does not exist",
            });
        }

        // Verify password & generate a JWT token

        const payload = {
            email: user.email,
            id: user._id,
            role: user.role,
        };


        if (await bcrypt.compare(password, user.password)) {
            // password match

            let token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h",
            });
            console.log('JWT_SECRET:', process.env.JWT_SECRET);
            console.log(user);
            user = user.toObject();
            user.token = token;
            console.log(user);
            user.password = undefined;
            console.log(user);

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }

            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message: "User logged in successfully"
            });
        }
        else {
            // password not match
            return res.status(403).json({
                success: false,
                message: "Password does not match",
            })
        }
    }
    catch (err) {
        console.error(err)
        return res.status(500).json({
            success: false,
            message: "Login false"
        })
    }
}
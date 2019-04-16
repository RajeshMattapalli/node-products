var jwt = require('jsonwebtoken'),
    expressJwt = require('express-jwt');

var User = require('../models/userModel');

var decrypt = require('../encryptDecrypt');

module.exports = {

    login(req, res) {
        console.log("req:" + req);
        User.findOne({ "userName": req.body.userName }, function (err, result) {
            if (err) {
                res.json(err);
            } else if (result) {
                var password = decrypt.get('123456$#@$^@1ERF', req.body.password);
                if (password === result.password) {
                    var token = jwt.sign({ userID: User.id }, 'secret', { expiresIn: '2h' });
                    // res.status(200).send({ token });
                    // res.status(200).json({ message: "User Exists" });
                    res.status(200).send({ token });
                } else if (password !== result.password) {
                    res.status(200).json({ message: "Password Doesn't Match" })
                }
            } else if (result === null) {
                res.json({ message: "Please Sign Up" });
            }
        });

    },
    registerUser(req, res) {
        console.log("req:" + req);
        var user = new User(req.body);
        User.findOne({ "userName": req.body.userName }, function (err, result) {
            if (err) {
                res.json(error);
            } else if (result) {
                res.status(200).json({ message: "User Got Already Registered" });
            } else if (result === null) {
                user.save().then(user => {
                    res.json("user saved to database");
                }).catch(err => {
                    res.status(400).send("unable to save to database");
                });
            }
        });
    }
};
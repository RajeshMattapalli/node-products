var Products = require('../models/productModel');

module.exports = {
    getProducts: (req, res) => {
        var query = req.query;
        Products.find(query, function (err, data) {
            if (err)
                res.status(500).send(err);
            else
                res.json(data);
        });
    },

    addProduct: (req, res) => {
        try {
            var product = new Products(req.body);
            product.save().then((product) => {
                res.status(201).json({ message: "Product Saved Succesfully" });
            });
        } catch (error) {
            console.log(error);
        }
    },

    deleteProduct: (req, res) => {
        try {
            var id = req.params.productId;
            Products.deleteOne({ "productId": id }, function (err, result) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json({ success: id });
                // res.send((result === 1) ? { msg: 'Deleted' } : { msg: 'error: ' + err });
            });
        } catch (e) {
            console.log(e);
        }
    },

    getProductById: (req, res) => {
        try {
            var id = parseInt(req.params.productId);
            Products.findOne({ "productId": id }, function (err, result) {
                if (err)
                    res.json(err);
                else {
                    res.json(result);
                }
            });
        } catch (e) {
            console.log(e);
        }
    },

    updateProduct: (req, res) => {
        try {
            var myQuery = req.body._id;
            var newvalues = { $set: req.body };
            Products.findByIdAndUpdate(myQuery, newvalues, function (err, result) {
                if (err)
                    res.json(err);
                else {
                    res.json({ success: req.body.productId });
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
} 
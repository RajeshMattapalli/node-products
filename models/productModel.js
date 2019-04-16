var mongoose = require('mongoose');

var productsModel = new mongoose.Schema({
    productId: {
        type: Number
    },
    productName: {
        type: String
    },
    productModel: {
        type: String
    },
    productRating: {
        type: Number
    }
})

module.exports = mongoose.model('Products', productsModel);

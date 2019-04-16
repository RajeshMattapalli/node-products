// var express = require('express');

// var routes = function (Products) {
//     var productRouter = express.Router();

//     productRouter.route('/')
//         .post(function (req, res) {
//             var product = new Products(req.body);
//             product.save();
//             res.status(201).send(product);
//         })
//         .get(function (req, res) {
//             var query = req.query;
//             Products.find(query, function (err, data) {
//                 if (err)
//                     res.status(500).send(err);
//                 else
//                     res.json(data);
//             });
//         })

//     productRouter.route('/:productId')
//         .delete(function (req, res) {
//             var id = req.params.productId;
//             Products.deleteOne({ "productId": id }, function (err, result) {
//                 if (err)
//                     res.status(500).send(err);
//                 else
//                     res.json({ success: id });
//                 // res.send((result === 1) ? { msg: 'Deleted' } : { msg: 'error: ' + err });
//             });
//         })
//         .get(function (req, res) {
//             var id = parseInt(req.params.productId);
//             Products.findOne({ "productId": id }, function (err, result) {
//                 if (err)
//                     res.json(err);
//                 else {
//                     res.json(result);
//                 }
//             });
//         });
//     return productRouter;
// }

// module.exports = routes;
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
   

mongoose.set('useCreateIndex', true)
mongoose.connect("mongodb://localhost:27017/productsAPI", { useNewUrlParser: true });

var app = express();

var port = process.env.port || 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// var productRouter = express.Router();

var indexRouter = require("./routes/index");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With,Content-Type");
    next();
});

app.use('/api', indexRouter);

app.listen(port, () => {
    console.log("App Listening on Port:" + port);
});

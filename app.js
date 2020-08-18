const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const {urlRouter,workerRouter} = require(`./routes`)
connectToDB();

function connectToDB() {
    mongoose.connect("mongodb://localhost:27017/test", {useNewUrlParser: true});
    const db = mongoose.connection;
    db.on("error", (err => {
        console.log(err)
    }));
}


const myApp = express();
myApp.use(express.json());
myApp.use(cors());

myApp.use(bodyParser.json());
myApp.use(bodyParser.urlencoded({extended: false}));


    myApp.use(`/urls`, urlRouter);
    myApp.use(`/worker`, workerRouter);

const PORT = 3005;

myApp.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`PORT ${PORT} work`);
});

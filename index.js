const express = require("express");
const connectDB = require("./db/connect");
const app = express();
const PORT = process.env.PORT || 3030;
require("dotenv").config();
const schemes = require("./routes/schemes");
const cors = require("cors");


const corsOptions = {
    // origin: process.env.ALLOWED_CLIENTS.split(',')
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}
// console.log(corsOptions.origin);

app.use(cors(corsOptions));

app.use(express.static("./public"));
app.use(express.json());


//routes
app.use("/api/v1/schemes", schemes);






const start = async() => {
    try {

        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`server is listening on port ${PORT}`);
        })
    } catch (err) {
        console.log(err);
    }
}

start();


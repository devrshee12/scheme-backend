const mongoose = require("mongoose");


// const mongoURI = "mongodb+srv://devarshee:<password>@cluster0.td2juvm.mongodb.net/scheme?retryWrites=true&w=majority";

// const connection = mongoURI;


const connectDB = (url) => {
    mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

}


module.exports = connectDB
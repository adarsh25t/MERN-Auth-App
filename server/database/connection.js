const mongoose = require('mongoose');
const uri = "mongodb+srv://loginapp:fXL2u8YtRF2VJTpb@cluster0.mpkudzn.mongodb.net/?retryWrites=true&w=majority";


function connection() {
    mongoose.connect(uri).then(()=> {
        console.log('Database Connected Successfully!');
    })
}

module.exports = connection
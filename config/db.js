const mongoose = require("mongoose");

const connect = () => {
    // ------------ (Mongodb Connection) --------
    mongoose.connect(process.env.MONGO_URL)
}

module.exports = connect;
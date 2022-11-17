const mongoose = require('mongoose')
require('dotenv').config()
// fredy 17/11
const db = mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('db connected'))
    .catch((err) => console.error(err))

module.exports = db

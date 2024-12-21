const mongoose = require('mongoose');
async function connection() {
    try {
        let connect = await mongoose.connect(`mongodb://localhost:27017/bookstore`);
        console.log("connection created....")
    } catch(err) {
        console.log(err)
    }
}
module.exports = connection
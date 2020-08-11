// Requires / Consts
const mongoose = require('mongoose')
 // const URI = 'mongodb://localhost/products'
 const URI = 'mongodb+srv://leonel0990:Ep2OuaLCw60zCnfT@leocluster.56krk.gcp.mongodb.net/SoftAndClean?retryWrites=true&w=majority'

// Connect to DB
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))

// Export
module.exports = mongoose

const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {type:String},
    description: {type:String},
    price: Number
});
mongoose.model('Product', ProductSchema);

module.exports = mongoose.model('Product');
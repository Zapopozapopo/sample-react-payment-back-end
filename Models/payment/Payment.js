const mongoose = require('mongoose');
const PaymentSchema = new mongoose.Schema({
    UserId: {type:String},
    ProductsId: Object,
    totalPrice: Number,
    paymentSource: String,
    date:{type: Date, default:Date.now()}
});
mongoose.model('Payment', PaymentSchema);

module.exports = mongoose.model('Payment');
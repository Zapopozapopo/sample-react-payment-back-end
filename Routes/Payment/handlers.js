const config = require('../../config');
const stripe = require("stripe")(config.payment.secret_key);
const Payment = require('../../Models/payment/Payment');

const postStripeCharge = res => (stripeErr, stripeRes) => {
    if (stripeErr) {
        res.status(500).send({ error: stripeErr });
    } else {
        res.status(200).send({ success: stripeRes });
    }
};

exports.test = (req,res)=>{
    stripe.charges.create(req.body.payment_info, postStripeCharge(res)).then(()=>{
        Payment.create({
            UserId:req.userId,
            ProductsId:req.body.idList,
            totalPrice:req.body.payment_info.amount/100,
            paymentSource:req.body.payment_info.source
        },function (data,err) {
        })
    });
};
const Product = require('../../Models/product/Product');

exports.getProductList = (req,res)=>{
    Product.find({},function(err,products){
        if(err) res.status(500).send("Problem on server");
        else res.status(200).send(products)
    })
};

exports.getCartList = (req,res)=>{
    let cartProduct = req.body.idList;
    let productIds = Object.keys(cartProduct);
    Product.find({_id:productIds},function(err,products){
        if(err){
           res.status(500).send("Problem on server");
        }
        else{
            let cartProducts =[];
            let totalPrice = 0;
            products.map((p)=>{
                cartProducts.push({product:p,quantity:cartProduct[p._id]});
                totalPrice +=p.price*cartProduct[p._id];
            });
            res.status(200).send({products:cartProducts, totalPrice:totalPrice})
        }
    });
};

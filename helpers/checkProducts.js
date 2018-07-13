const Product = require('../Models/product/Product');

exports.checkProducts =()=>{
    Product.count(function (err, count) {
        if (!err && count === 0) {
            insertProducts()
        }
    });
};

function insertProducts() {
    Product.insertMany([
        {title: 'apple', description: 'some green apple', price: 25},
        {title: 'orange', description: 'some orange', price: 30},
        {title: 'onion', description: 'just onion', price: 5},
        {title: 'potato', description: 'just potato', price: 20}
    ],function(err,docs){if(err)console.log(err)})
}
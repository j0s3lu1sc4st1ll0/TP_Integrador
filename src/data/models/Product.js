const { Schema, model } = require ('mongoose');
//simplificamos para reducir codigo y traemos 
//las funcionalidades que necesitamos

const Product = new Schema ({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    discount: {type: Number, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    image: {type: String, required: true}
});

module.exports = model('Product', Product);
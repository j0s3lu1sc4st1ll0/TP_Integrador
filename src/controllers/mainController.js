/* para llamar a los productos y usar el archivo products.json*/
//const path = require ('path');
//const fs = require('fs');

//const pathJson = path.resolve(__dirname, '../data/products.json');
//const productsJson = fs.readFileSync(pathJson, 'utf-8');
//const products = JSON.parse(productsJson);

const Productos = require('../data/models/Product');

module.exports = {
    home: async function (req, res) {
        const products = await Productos.find();
        console.log();
        res.render('home', { products: products });
    },
    search: async (req, res) => {
        const keywords = req.query.keywords; //recordar usar el nombre de los inputs
        const products = await Productos.find({});
        const searchRes = products.filter((producto) => producto.description.toLowerCase().includes(keywords.toLowerCase()) || producto.name.toLowerCase().includes(keywords.toLowerCase()));
        res.render('home',{products: searchRes});
    }
};
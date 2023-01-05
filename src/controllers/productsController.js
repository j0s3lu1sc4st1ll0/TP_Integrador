/* para llamar a los productos y usar el archivo products.json*/
const path = require('path');
//const fs = require('fs');

//const pathJson = path.resolve(__dirname, '../data/products.json'); //ubicacion del archivo
//const productsJson = fs.readFileSync(pathJson, 'utf-8');//Se lee el archivo
//const products = JSON.parse(productsJson);// Lo convierte en un array
const Product = require('../data/models/Product');

let controller = {
    detail: async (req, res) => {
        const product = await Product.findById(req.params.id);
        res.render('products/detail', { product: product });
    },
    create: (req, res) => {
        res.render('products/create');
    },
    edit: async (req, res) => {
        const product = await Product.findById(req.params.id)
        res.render('products/edit', { product: product });
    },
    store: async (req, res) => {
        if (!req.file) {
            return res.send('La imagen debe contener la extensión .jpg, .png, .gif');
        }
        await Product.create({ ...req.body, image: req.file.filename })

        return res.redirect('/');
    },
    delete: (req, res) => {
        Product.findOneAndRemove({ _id: req.params.id }, (err, product) => {
            console.log(product);
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.redirect('/');
        });
    },
    update: async (req, res) => {
        const product = await Product.findById(req.params.id);
        await Product.findByIdAndUpdate(
            { _id: req.params.id},
            {
                ...req.body
            }
        
        );
        return res.redirect('/');
    }
};

module.exports = controller;
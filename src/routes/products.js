const path = require ('path');
const express = require ('express');
const router = express.Router ();

const upload = require('../middlewares/uploadFile');

const controller = require ('../controllers/productsController');

router.get('/detail/:id', controller.detail);
router.get ('/edit/:id', controller.edit);
router.post('/edit/:id', upload.single("productImage"), controller.update);
router.get ('/create', controller.create);
router.post('/create', upload.single("productImage"), controller.store);
router.post('/delete/:id',controller.delete);
module.exports = router;
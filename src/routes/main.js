/* configuramos una ruta para el Home */
const express= require('express');
const router = express.Router();
const controller = require ('../controllers/mainController');

router.get('/', controller.home);
router.get('/search', controller.search);
module.exports = router;

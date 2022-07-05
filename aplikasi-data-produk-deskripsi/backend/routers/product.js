const router = require('express').Router();
const productController = require('../controllers/product-controller'); 

router.get('/', productController.index);
router.post('/', productController.create);
router.get('/:id', productController.show);
router.put('/:id', productController.update);
router.delete('/:id', productController.destroy);


module.exports = router
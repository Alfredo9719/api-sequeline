const { Router } = require("express");
const { productsGet, productGetFilter, productPost, productPut, productDelete } = require("../controllers/product.controller");
const router = Router();

router.get('/products', productsGet);

router.get('/products/:product_id', productGetFilter);

router.post('/products', productPost);

router.put('/products/:product_id', productPut);

router.delete('/products/:product_id', productDelete);

module.exports = router;
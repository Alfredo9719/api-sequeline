const { response, request } = require('express');

const Product = require("../model/product.model");


const productsGet = async (req = request, res = response) => {
    const products = await Product.findAll();
    res.status(200).json({
        ok: true,
        body: products
    });
}

const productGetFilter = async (req = request, res = response) => {
    const id = req.params.product_id;
    const product = await Product.findOne({
        where: {
            product_id: id
        }
    });
    res.status(200).json({
        ok: true,
        body: product
    });
}

const productPost = async (req = request, res = response) => {
    const body = req.body;
    await Product.sync()
    const createProduct = await Product.create({
        product_name: body.product_name,
        price: body.price,
        is_stock: body.is_stock
    })
    res.status(201).json({
        ok: true,
        message:"Created Product"
    });
}

const productPut = async (req = request, res = response) => {
    const body = req.body;
    const id = req.params.product_id;
    const updateProduct = await Product.update(
        {
            product_name: body.product_name,
            price: body.price,
            is_stock: body.is_stock
    },
    {
        where: {
            product_id: id
        }
    });
    res.status(200).json({
        ok: true,
        message: updateProduct
    })
}

const productDelete = async (req = request, res = response) => {
    const id = req.params.product_id;
    const deleteProducts = await Product.destroy({
        where: {
            product_id: id
        }
    });
    res.status(200).json({
        ok: true,
        message: deleteProducts
    });
}

module.exports = {
    productsGet,
    productGetFilter,
    productPost,
    productPut,
    productDelete
}
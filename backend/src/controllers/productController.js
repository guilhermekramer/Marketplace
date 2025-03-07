import * as productService from '../service/productService/productService.js';

export const createProductController = async (req, res) => {
    try {
        const product = req.body;
        const newProduct = await productService.createProduct(product);
        res.status(201).json(newProduct);
    } catch (error) {
        console.log("Error in createProductController function", error);
        res.status(500).send(error);
    }
}

export const deleteProductController = async (req, res) => {
    try {
        const id = req.params.id;
        await productService.deleteProduct(id);
        res.status(204).send();
    } catch (error) {
        console.log("Error in deleteProductController function", error);
        res.status(500).send(error);
    }
}

export const getAllProductsController = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        console.log("Error in getAllProductsController function", error);
        res.status(500).send(error);
    }
}

export const getProductByIdController = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await productService.getProductById(id);
        res.status(200).json(product);
    } catch (error) {
        console.log("Error in getProductByIdController function", error);
        res.status(500).send(error);
    }
}

export const updateProductController = async (req, res) => {
    try{
        const id = req.params.id;
        const product = req.body;
        const updatedProduct = await productService.updateProduct(id, product);
        res.status(200).json(updatedProduct);

    }catch(error){
        console.log("Error in updateProductController function", error);
        res.status(500).send(error);
    }
}
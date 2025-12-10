import {
  getProducts,
  getProduct,
  addProduct,
  editProduct,
  removeProduct,
} from '../services/products.service.js';

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await getProduct(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const newProduct = await addProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await editProduct(req.params.id, req.body);
    if (updatedProduct) {
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const result = await removeProduct(req.params.id);
    if (result) {
      res.json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    next(error);
  }
};
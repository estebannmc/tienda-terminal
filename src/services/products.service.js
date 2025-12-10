import { ProductModel } from '../models/product.model.js';

export const getProducts = async () => {
  return await ProductModel.findAll();
};

export const getProduct = async (id) => {
  return await ProductModel.findById(id);
};

export const addProduct = async (productData) => {
  return await ProductModel.create(productData);
};

export const editProduct = async (id, productData) => {
  return await ProductModel.update(id, productData);
};

export const removeProduct = async (id) => {
  return await ProductModel.remove(id);
};
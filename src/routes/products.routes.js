import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/products.controller.js';
import { protect, admin } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.route('/').get(getAllProducts).post(protect, admin, createProduct);
router
  .route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

export default router;
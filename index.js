import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/products.routes.js";
import authRouter from "./src/routes/auth.routes.js";
import { notFoundHandler } from "./src/middlewares/notfound.middleware.js";
import { errorHandler } from "./src/middlewares/error.middleware.js";

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/products", productsRouter);
app.use("/auth", authRouter);

// 404 para rutas desconocidas
app.use(notFoundHandler);

// Manejo de errores
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

console.log("¡Proyecto de tienda en línea, está funcionando!");

import fetch from 'node-fetch';

const API_URL = 'https://fakestoreapi.com/products';

async function getAllProducts() {
  try {
    const response = await fetch(API_URL);
    const products = await response.json();
    console.log(products);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
  }
}

async function getProductById(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (response.ok) {
      const product = await response.json();
      console.log(product);
    } else {
      console.log(`Producto con ID ${id} no encontrado.`);
    }
  } catch (error) {
    console.error('Error al obtener el producto:', error);
  }
}

async function createProduct(title, price, category) {
  try {
    const newProduct = {
      title,
      price: parseFloat(price),
      category,
      description: 'Descripción de muestra',
      image: 'https://i.pravatar.cc',
    };

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    });

    const product = await response.json();
    console.log('Producto creado:', product);
  } catch (error) {
    console.error('Error al crear el producto:', error);
  }
}

async function deleteProduct(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log(`Producto con ID ${id} eliminado.`);
    } else {
      console.log(`Error al eliminar el producto con ID ${id}.`);
    }
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
  }
}

const [,, command, resource, ...args] = process.argv;

if (command === 'GET' && resource === 'products') {
  if (args.length === 0) {
    getAllProducts();
  } else {
    const [id] = args;
    getProductById(id);
  }
} else if (command === 'POST' && resource === 'products' && args.length === 3) {
  const [title, price, category] = args;
  createProduct(title, price, category);
} else if (command === 'DELETE' && resource === 'products' && args.length === 1) {
  const [id] = args;
  deleteProduct(id);
} else {
  console.log('Comando o parámetros no válidos.');
}
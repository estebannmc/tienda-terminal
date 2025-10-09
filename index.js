console.log("¡Proyecto de tienda en línea, está funcionando!");

import fetch from 'node-fetch';

const API_URL = 'https://fakestoreapi.com/products';

async function getAllProducts() {
  try {
    const response = await fetch(API_URL);
    const products = await response.json();
    console.log(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

async function getProductById(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (response.ok) {
      const product = await response.json();
      console.log(product);
    } else {
      console.log(`Product with ID ${id} not found.`);
    }
  } catch (error) {
    console.error('Error fetching product:', error);
  }
}

async function createProduct(title, price, category) {
  try {
    const newProduct = {
      title,
      price: parseFloat(price),
      category,
      description: 'Sample description',
      image: 'https://i.pravatar.cc',
    };

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    });

    const product = await response.json();
    console.log('Created Product:', product);
  } catch (error) {
    console.error('Error creating product:', error);
  }
}

async function deleteProduct(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log(`Product with ID ${id} deleted.`);
    } else {
      console.log(`Failed to delete product with ID ${id}.`);
    }
  } catch (error) {
    console.error('Error deleting product:', error);
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
  console.log('Invalid command or parameters.');
}

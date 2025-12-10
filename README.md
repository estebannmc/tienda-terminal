Tienda Terminal – Proyecto Final NodeJS/Express
Este proyecto es una API REST para manejar productos de una tienda. Se hizo con NodeJS + Express + Firebase Firestore y tiene autenticación con JWT.

🚀 Cómo arrancar
Clonar el repo

bash
git clone https://github.com/estebannmc/tienda-terminal.git
cd tienda-terminal
Instalar dependencias

bash
npm install
Configurar variables de entorno

Crear un archivo .env en la raíz del proyecto.

Pegar algo así (con tus datos de Firebase):

env
PORT=3000
JWT_SECRET=super_secreto_cambia_esto

FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_STORAGE_BUCKET=tu_project_id.appspot.com
FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
FIREBASE_APP_ID=tu_app_id
Levantar el servidor

bash
npm start
Si todo va bien, deberías ver:

Código
Servidor ejecutándose en el puerto 3000
📦 Endpoints
Auth
POST /auth/login Body:

json
{ "username": "admin", "password": "1234" }
Devuelve un token JWT.

Products
GET /api/products → lista todos los productos.

GET /api/products/:id → devuelve un producto por ID.

POST /api/products/create → crea un producto (requiere token). Body:

json
{ "name": "Cuaderno", "price": 1299.99, "stock": 25 }
DELETE /api/products/:id → elimina un producto (requiere token).

🔑 Cómo probar rápido
Login → obtenés el token.

Copiás el token y lo pegás en los headers:

Código
Authorization: Bearer TU_TOKEN
Probás crear o borrar productos con ese token.

Para listar productos no hace falta token.

🛠️ Herramientas útiles
Thunder Client (extensión de VS Code) → para probar los endpoints fácil.

Postman → alternativa externa.

curl → desde la terminal.

📝 Notas
Este proyecto es de práctica, no está pensado para producción.

Los usuarios están hardcodeados (ejemplo: admin/1234).

Firestore guarda los productos en la colección products.

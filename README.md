# Luciano De Marco

Presentación
---
Aplicación web de ecommerce desarrollada con React (Vite) para la venta de productos de carpintería. Incluye catálogo filtrable por categorías, vista detallada de producto, carrito con control de stock y flujo de checkout integrado con Firestore.

Funcionalidades
---
- Listado de productos por categoría (Mesas, Sillas, Muebles).
- Página de detalle de producto (imagen a la izquierda, información a la derecha).
- Agregar productos al carrito (cantidad acumulada sin superar stock).
- Visualización y gestión del carrito (ver items, eliminar, vaciar).
- Formulario de checkout que genera un ID de orden (FireStore).
- Loader con react-spinners y diseño responsive.
- Uso de imágenes desde la carpeta public/Image.

Librerías externas utilizadas
---
- React
- Vite
- react-router-dom
- react-icons
- react-spinners
- react-toastify
- firebase (Firestore)

Cómo ejecutar
---
1. Instalar dependencias:
   npm install
2. Iniciar servidor de desarrollo:
   npm run dev
3. Abrir en el navegador la URL que indique Vite (normalmente http://localhost:5173)

Enlaces
---
- LinkedIn: https://www.linkedin.com/in/luciano-de-marco-88b99836a/

Notas
---
- Reemplaza las rutas de imágenes en `public/Image` si cambias nombres.
- Verifica `products.json` para stock y nombres exactos de archivos de imagen.
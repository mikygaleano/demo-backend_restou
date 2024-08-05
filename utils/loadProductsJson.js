import fs from 'fs';
import path from 'path';

// Resuelve la ruta absoluta al archivo products.json
const productsFilePath = path.resolve('utils/products.json');

// Cargar el archivo JSON
let products;

try {
  const data = fs.readFileSync(productsFilePath, 'utf-8'); // Asegúrate de usar la ruta correcta al archivo
  products = JSON.parse(data);
  console.log('Archivo JSON cargado correctamente');
} catch (error) {
  console.error('Error al cargar el archivo JSON:', error);
  process.exit(1); // Salir si hay un error al cargar el JSON
}

export {
  products
};

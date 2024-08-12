import { v4 as uuidv4 } from 'uuid'; // Importa la función para generar UUIDs
import { turso } from "../config/config.js";
import multer from 'multer';
import cloudinary from 'cloudinary';

// Configurar Cloudinary con tus credenciales
cloudinary.v2.config({
  cloud_name: 'dbqaivo20',
  api_key: '511828751657437',
  api_secret: 'F6sKb30Qe3ip74I7brKPvUL6c4s',
});

// Configurar Multer para manejar la subida de archivos temporalmente
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const postNewProducts = async (req, res) => {
  const { name, price: priceStr, description, categories: categoriesStr } = req.body;

  const file = req.file; // La imagen subida


  // Convertir el precio a número
  const price = parseFloat(priceStr);

  // Convertir las categorías a un array
  let categoryArray;
  try {
    categoryArray = JSON.parse(categoriesStr);
  } catch (error) {
    return res.status(400).json({ message: 'Categorías inválidas' });
  }

  // Validar los datos de entrada
  if (!name || !file || isNaN(price) || price <= 0 || !description) {
    return res.status(400).json({ message: 'Datos inválidos' });
  }

  try {
    const id = uuidv4();

    // Subir la imagen a Cloudinary
    cloudinary.v2.uploader.upload_stream({
      folder: "products", // Carpeta en Cloudinary donde se guardará la imagen
    }, async (error, result) => {
      if (error) {
        console.error('Error al subir la imagen a Cloudinary:', error);
        return res.status(500).json({ message: 'Error al subir la imagen' });
      }

      const imageUrl = result.secure_url;

      // Guardar los detalles del producto en la base de datos
      const dbResult = await turso.execute({
        sql: `INSERT INTO products (id,  image_path, name, price, description, categories) VALUES (?, ?, ?, ?, ?, ?)`,
        args: [id, imageUrl, name, price, description, categoryArray],
      });

      if (dbResult) {
        return res.status(201).json({ message: 'Producto creado', product: dbResult });
      } else {
        return res.status(404).json({ message: 'Producto no guardado' });
      }
    }).end(file.buffer);

  } catch (error) {
    console.error('Error al crear el producto:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};



export { postNewProducts };

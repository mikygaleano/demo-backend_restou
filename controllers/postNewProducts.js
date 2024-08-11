import { v4 as uuidv4 } from 'uuid'; // Importa la función para generar UUIDs
import { turso } from "../config/config.js";

const postNewProducts = async (req, res)=> {
  const { name, price, description, categories } = req.body;

  // Validar los datos de entrada
  if (!name || typeof price !== 'number' || price <= 0 || !description) {
    return res.status(400).json({ message: 'Datos inválidos' });
  }

  try {
    // Generar un ID único para el nuevo producto
    const id = uuidv4();

    // Consulta SQL para insertar un nuevo producto con el ID generado
    // Ejecutar la consulta usando el cliente Turso
    const result = await turso.execute({
      sql: `INSERT INTO products (id, name, price, description, categories) VALUES (?, ?, ?, ?, ?)`,
      args: [id, name, price, description, categories],
    }
    );

    // Devolver nuevo producto
    if (result) {
      return res.status(201).json(result.rows);
    }
    res.status(404).json({ message: 'Producto no guardado' });

  } catch (error) {
    // Manejo de errores
    console.error('Error al crear el producto:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};


export {
    postNewProducts
}
import { turso } from "../config/config.js";


const getProductsByName = async (req, res) => {
  const { name } = req.query; // Obtener el nombre del query string

  if (!name) {
    return res.status(400).json({ message: 'Nombre del producto es requerido' });
  }

  try {
    // Consulta SQL para buscar productos por nombre
    // Ejecutar la consulta usando el cliente Turso
    const result = await turso.execute({
      sql: `SELECT * FROM products WHERE LOWER(name) LIKE LOWER(?)`, 
      args: [`%${name}%`],
    });

    // Verificar si se encontraron productos
    if (result) {
      return res.json(result.rows);
    }

    // No se encontraron productos
    res.status(404).json({ message: 'No se encontraron productos con el nombre dado'});
  } catch (error) {
    // Manejo de errores
    console.error('Error al buscar productos por nombre:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export { getProductsByName };

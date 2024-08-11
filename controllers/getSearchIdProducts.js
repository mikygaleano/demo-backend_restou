import { turso } from "../config/config.js";

const getSearchIdProducts = async (req, res) => {
  const { id } = req.params;

  try {
    // Consulta SQL para buscar el producto por ID
    // Ejecutar la consulta usando el cliente Turso
    const result = await turso.execute({
      sql: 'SELECT * FROM products WHERE id = ?',
      args: [id],
    });

    // Verificar si se encontró el producto
    if (result) {
      return res.json(result.rows); // Suponiendo que result es un array y tomamos el primer resultado
    }

    // Producto no encontrado
    res.status(404).json({ message: 'Producto no encontrado' });
  } catch (error) {
    // Manejo de errores
    console.error('Error al buscar el producto:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export {
    getSearchIdProducts
};

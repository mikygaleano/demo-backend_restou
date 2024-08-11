import { turso } from "../config/config.js";

const getProducts = async (req, res) => {

  try {
    const result = await turso.execute({
      sql: 'SELECT * FROM products',
      args: '',
    });
    if (result) {
      return res.json(result.rows);
    }
    res.status(404).json({ message: 'Producto no encontrado' });
  } catch (error) {
    console.error('Error al buscar el producto:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export { getProducts };

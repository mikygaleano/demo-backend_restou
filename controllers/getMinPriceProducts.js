import { turso } from "../config/config.js";

const getMinPriceProducts = async (req, res) => {
  try {
      // Ejecutar la consulta
      const dbResult = await turso.execute({
          sql: `SELECT * FROM products ORDER BY price ASC`,
          args: [], // No hay parámetros en la consulta, por lo que se usa un array vacío
      });

      if (dbResult && dbResult.rows.length > 0) {
          return res.status(200).json(dbResult.rows);
      }

      // Producto no encontrado
      res.status(404).json({ message: 'No se encontraron productos.' });

  } catch (error) {
      // Manejo de errores
      console.error('Error al buscar los productos:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
  }
};


export {
  getMinPriceProducts
};
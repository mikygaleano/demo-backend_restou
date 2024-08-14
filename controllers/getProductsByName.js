import { turso } from "../config/config.js";


const getProductsByName = async (req, res) => {
  const { name, rango } = req.query; // Obtener el nombre del query string

  if (!name) {
    return res.status(400).json({ message: 'Nombre del producto es requerido' });
  }

  try {

    let orderClause = ''; // Inicializa la cláusula de ordenamiento como vacía

    // Determinar la cláusula de ordenamiento según el valor de "rango"
    if (rango === 'min-price') {
      orderClause = 'ORDER BY price ASC';
    } else if (rango === 'max-price') {
      orderClause = 'ORDER BY price DESC';
    }
    // Consulta SQL para buscar productos por nombre
    // Ejecutar la consulta usando el cliente Turso
    const result = await turso.execute({
      sql: `SELECT * FROM products WHERE LOWER(name) LIKE LOWER(?) ${orderClause}`, 
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

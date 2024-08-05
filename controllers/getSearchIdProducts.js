import { products } from "../utils/loadProductsJson.js";


const getSearchIdProducts = async (req, res)=> {
  const { id } = req.params;
  const product = products.find(product => product.id.toString() === id.toString());
  if (product) return res.json(product);
  res.status(404).json({ message: 'Producto no encontrado' });
};


export {
    getSearchIdProducts
}

import { products } from "../utils/loadProductsJson.js";


const getProducts = async (req, res)=> {
    res.json(products)
};


export {
    getProducts
}
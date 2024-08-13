import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

async function testNewProduct() {
  try {
    const formData = new FormData();
    formData.append('name', 'empanadas tucumanas');
    formData.append('price', 8.25);
    formData.append('description', 'empanadas rellenas de carne cortada a cuchillo');
    formData.append('categories', JSON.stringify(['empanadas', 'comida']));

    // Ruta de la imagen
    const imagePath = './public/milanesa.jpg'; 
    formData.append('image', fs.createReadStream(imagePath));

    const response = await axios.post('http://localhost:3000/products/new', formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error al hacer la solicitud:', error.response ? error.response.data : error.message);
  }
}

testNewProduct();

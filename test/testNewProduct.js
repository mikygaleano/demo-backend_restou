import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

async function testNewProduct() {
  try {
    const formData = new FormData();
    formData.append('name', 'milanesa común');
    formData.append('price', 5.15);
    formData.append('description', 'milanesa de carne de ternero');
    formData.append('categories', JSON.stringify(['milanesa', 'comida']));

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

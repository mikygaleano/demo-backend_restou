import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

async function testUpload() {
  try {
    const formData = new FormData();
    formData.append('name', 'milanesa napolitana');
    formData.append('price', 12.99);
    formData.append('description', 'milanesa con doble tomate y muzzarella');
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

testUpload();

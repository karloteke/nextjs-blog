// pages/api/posts.js
import sequelize from '../../config/database'; // Importa la instancia de Sequelize
import Post from '../../models/Post'; 

export default async function handler(req, res) {
  try {
    await sequelize.authenticate(); // Conectar a la base de datos
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    return res.status(500).json({ error: 'Error al conectar a la base de datos' });
  }

  try {
    if (req.method === 'GET') {
      const posts = await Post.findAll(); // Obtener todos los posts
      res.status(200).json(posts); // Devolver los posts en formato JSON
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Método ${req.method} no permitido`);
    }
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  } finally {
    await sequelize.close(); // Asegúrate de cerrar la conexión al final
  }
}

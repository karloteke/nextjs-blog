const sequelize = require('./config/database'); // Importa la instancia de Sequelize
const Post = require('./models/Post'); // Importa el modelo Post

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true }); // Esto eliminará las tablas existentes y las recreará
    console.log('Base de datos sincronizada y tabla Post creada.');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  } finally {
    await sequelize.close(); // Cierra la conexión
  }
}

syncDatabase();

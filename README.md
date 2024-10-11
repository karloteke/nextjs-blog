
# Blog en Next.js

Este es un **blog** sobre gatos 🐱 creado con **Next.js** que utiliza **Sequelize** para interactuar con una base de datos **MySQL**.
El diseño del blog está implementado utilizando Tailwind CSS

## 📦 Instalación y Ejecución del Proyecto

1. **Clona el repositorio**:

   ```bash
   git clone <URL_DE_TU_REPOSITORIO>
   cd <NOMBRE_DE_TU_PROYECTO>
   
2. **Instala las dependencias del proyecto:**:

   ```bash
    npm install
   
3. **Levanta el contenedor de la base de datos**:
   
    ```bash
    docker-compose up -d
    
4. **Ejecuta las migraciones**:

   ```bash
   npx sequelize-cli db:migrate

5. **Rellena la base de datos con datos de ejemplo (Seeders):**

   ```bash
   node seeders/seed.js

   
6. **Inicia la aplicación**:
   
    ```bash
    npm run dev

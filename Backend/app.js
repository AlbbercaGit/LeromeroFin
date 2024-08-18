const express = require('express');
const app = express();
const reservasRouter = require('./routes/reservas');
require('dotenv').config();

// Middleware para parsear JSON
app.use(express.json());

// Usar el enrutador de reservas
app.use('/reservas', reservasRouter);

// Configurar el puerto
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

const express = require('express');
const cors = require('cors'); 
const app = express();
const reservasRouter = require('./routes/reservas');
const clientesRouter = require('./routes/clientes');
const zonasRouter = require('./routes/zona');
const turnosRouter = require('./routes/turno');
require('dotenv').config();

// Middleware para habilitar CORS
app.use(cors({
  origin: 'http://localhost:3000', // Reemplaza con el origen de tu aplicación
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para parsear JSON
app.use(express.json());

// Usar los enrutadores
app.use('/reservas', reservasRouter);
app.use('/clientes', clientesRouter);
app.use('/zona', zonasRouter);
app.use('/turno', turnosRouter);

// Configurar el puerto
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
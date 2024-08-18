const express = require('express');
const router = express.Router();
const mysql = require('mysql');
require('dotenv').config();

// Configura la conexión a la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
// Crear un nuevo cliente
router.post('/clientes', (req, res) => {
    const { nombre, telefono, email } = req.body;
  
    const query = `INSERT INTO Cliente (nombre, telefono, email) VALUES (?, ?, ?)`;
  
    db.query(query, [nombre, telefono, email], (err, result) => {
      if (err) {
        console.error('Error al crear el cliente:', err);
        res.status(500).send('Error en el servidor');
        return;
      }
      res.status(201).send('Cliente creado con éxito');
    });
  });
  
  // Obtener todos los clientes
  router.get('/clientes', (req, res) => {
    const query = 'SELECT * FROM Cliente';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener los clientes:', err);
        res.status(500).send('Error en el servidor');
        return;
      }
      res.json(results);
    });
  });
  
  // Obtener un cliente por ID
  router.get('/clientes/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Cliente WHERE id = ?';
  
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error('Error al obtener el cliente:', err);
        res.status(500).send('Error en el servidor');
        return;
      }
      res.json(result);
    });
  });
      
  module.exports = router;
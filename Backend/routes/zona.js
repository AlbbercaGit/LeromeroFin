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
// Crear una nueva zona
router.post('/zonas', (req, res) => {
    const { nombre, capacidad_maxima } = req.body;
  
    const query = `INSERT INTO Zona (nombre, capacidad_maxima) VALUES (?, ?)`;
  
    db.query(query, [nombre, capacidad_maxima], (err, result) => {
      if (err) {
        console.error('Error al crear la zona:', err);
        res.status(500).send('Error en el servidor');
        return;
      }
      res.status(201).send('Zona creada con éxito');
    });
  });
  
  // Obtener todas las zonas
  router.get('/zonas', (req, res) => {
    const query = 'SELECT * FROM Zona';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener las zonas:', err);
        res.status(500).send('Error en el servidor');
        return;
      }
      res.json(results);
    });
  });
  
  // Obtener una zona por ID
  router.get('/zonas/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Zona WHERE id = ?';
  
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error('Error al obtener la zona:', err);
        res.status(500).send('Error en el servidor');
        return;
      }
      res.json(result);
    });
  });
  module.exports = router;
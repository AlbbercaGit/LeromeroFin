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

// Crear un nuevo turno
router.post('/turnos', (req, res) => {
    const { nombre, hora_inicio, hora_fin, aforo_maximo } = req.body;
  
    const query = `INSERT INTO Turno (nombre, hora_inicio, hora_fin, aforo_maximo) VALUES (?, ?, ?, ?)`;
  
    db.query(query, [nombre, hora_inicio, hora_fin, aforo_maximo], (err, result) => {
      if (err) {
        console.error('Error al crear el turno:', err);
        res.status(500).send('Error en el servidor');
        return;
      }
      res.status(201).send('Turno creado con éxito');
    });
  });
  
  // Obtener todos los turnos
  router.get('/turnos', (req, res) => {
    const query = 'SELECT * FROM Turno';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener los turnos:', err);
        res.status(500).send('Error en el servidor');
        return;
      }
      res.json(results);
    });
  });
  
  // Obtener un turno por ID
  router.get('/turnos/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Turno WHERE id = ?';
  
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error('Error al obtener el turno:', err);
        res.status(500).send('Error en el servidor');
        return;
      }
      res.json(result);
    });
  });
  module.exports = router;
  
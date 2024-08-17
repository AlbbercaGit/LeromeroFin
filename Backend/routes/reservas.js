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

// Ruta para crear una nueva reserva
router.post('/', (req, res) => {
  const { cliente_id, zona_id, turno_id, numero_personas, fecha } = req.body;

  const query = `INSERT INTO Reserva (cliente_id, zona_id, turno_id, numero_personas, fecha)
                 VALUES (?, ?, ?, ?, ?)`;

  db.query(query, [cliente_id, zona_id, turno_id, numero_personas, fecha], (err, result) => {
    if (err) {
      console.error('Error al crear la reserva:', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.status(201).send('Reserva creada con éxito');
  });
});

// Ruta para obtener todas las reservas
router.get('/', (req, res) => {
  const query = 'SELECT * FROM Reserva';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener las reservas:', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.json(results);
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const mysql = require('mysql');
require('dotenv').config();

// Configura la conexión a la base de datos
let db;

function handleDisconnect() {
  db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      setTimeout(handleDisconnect, 2000); // Intentar reconectar después de 2 segundos
    } else {
      console.log('Connected to the database');
    }
  });

  db.on('error', (err) => {
    console.error('Database error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'ECONNRESET') {
      handleDisconnect(); // Reconectar automáticamente si la conexión se pierde
    } else {
      throw err; // Lanzar otros errores
    }
  });
}

handleDisconnect();

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

// Definir la ruta /reservas-completas
router.post('/reservas-completas', async (req, res) => {
  const { nombre, apellido, email, telefono, zona, turno, numero_personas, fecha } = req.body;

  try {
    // Iniciar la transacción
    await db.beginTransaction();

    // Verificar si el cliente ya existe por su email
    let clienteQuery = 'SELECT id FROM Cliente WHERE email = ?';
    let clienteResult = await new Promise((resolve, reject) => {
      db.query(clienteQuery, [email], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });

    let cliente_id;

    if (clienteResult.length > 0) {
      // El cliente ya existe
      cliente_id = clienteResult[0].id;
    } else {
      // Crear un nuevo cliente
      clienteQuery = 'INSERT INTO Cliente (nombre, apellido, email, telefono) VALUES (?, ?, ?, ?)';
      let nuevoCliente = await new Promise((resolve, reject) => {
        db.query(clienteQuery, [nombre, apellido, email, telefono], (err, result) => {
          if (err) reject(err);
          else resolve(result);
        });
      });

      cliente_id = nuevoCliente.insertId;
    }

    // Obtener zona_id y turno_id basado en el nombre
    const zonaQuery = 'SELECT id FROM Zona WHERE nombre = ?';
    const zonaResult = await new Promise((resolve, reject) => {
      db.query(zonaQuery, [zona], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });

    if (zonaResult.length === 0) {
      throw new Error(`No se encontró la zona con nombre: ${zona}`);
    }

    const turnoQuery = 'SELECT id FROM Turno WHERE nombre = ?';
    const turnoResult = await new Promise((resolve, reject) => {
      db.query(turnoQuery, [turno], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });

    if (turnoResult.length === 0) {
      throw new Error(`No se encontró el turno con nombre: ${turno}`);
    }

    const zona_id = zonaResult[0].id;
    const turno_id = turnoResult[0].id;

    // Crear la reserva con el cliente_id, zona_id, turno_id, y otros datos
    const reservaQuery = `INSERT INTO Reserva (cliente_id, zona_id, turno_id, numero_personas, fecha) 
                          VALUES (?, ?, ?, ?, ?)`;
    await new Promise((resolve, reject) => {
      db.query(reservaQuery, [cliente_id, zona_id, turno_id, numero_personas, fecha], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });

    // Hacer commit de la transacción
    await db.commit();

    res.status(201).send('Reserva creada con éxito');
  } catch (err) {
    // En caso de error, hacer rollback de la transacción
    await db.rollback();
    console.error('Error al crear la reserva:', err);
    res.status(500).send(`Error en el servidor: ${err.message}`);
  }
});

module.exports = router;
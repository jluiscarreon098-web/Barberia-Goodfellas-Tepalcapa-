const express = require('express');
const path = require('path');
const Database = require('better-sqlite3');

const app = express();
const PORT = process.env.PORT || 3000;

// Base de datos
const db = new Database('barberia.db');
const schema = require('fs').readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
db.exec(schema);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas simples de prueba
app.get('/api/clientes', (req, res) => {
  const clientes = db.prepare('SELECT * FROM clientes').all();
  res.json(clientes);
});

app.get('/api/productos', (req, res) => {
  const productos = db.prepare('SELECT * FROM productos').all();
  res.json(productos);
});

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});

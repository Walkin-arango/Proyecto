const db = require('./db');

// Crear tablas
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS genero (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    estado TEXT CHECK(estado IN ('Activo', 'Inactivo')) NOT NULL,
    fecha_creacion TEXT,
    fecha_actualizacion TEXT,
    descripcion TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS director (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombres TEXT NOT NULL,
    estado TEXT CHECK(estado IN ('Activo', 'Inactivo')) NOT NULL,
    fecha_creacion TEXT,
    fecha_actualizacion TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS productora (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    estado TEXT CHECK(estado IN ('Activo', 'Inactivo')) NOT NULL,
    fecha_creacion TEXT,
    fecha_actualizacion TEXT,
    slogan TEXT,
    descripcion TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS tipo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    fecha_creacion TEXT,
    fecha_actualizacion TEXT,
    descripcion TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS media (
    serial TEXT PRIMARY KEY,
    titulo TEXT NOT NULL,
    sinopsis TEXT,
    url TEXT UNIQUE NOT NULL,
    imagen TEXT,
    fecha_creacion TEXT,
    fecha_actualizacion TEXT,
    año_estreno INTEGER,
    genero_id INTEGER,
    director_id INTEGER,
    productora_id INTEGER,
    tipo_id INTEGER,
    FOREIGN KEY (genero_id) REFERENCES genero(id),
    FOREIGN KEY (director_id) REFERENCES director(id),
    FOREIGN KEY (productora_id) REFERENCES productora(id),
    FOREIGN KEY (tipo_id) REFERENCES tipo(id)
  )`);
});

db.close((err) => {
  if (err) {
    console.error('Error al cerrar la base de datos', err.message);
  } else {
    console.log('Base de datos inicializada');
  }
});

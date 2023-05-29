const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { dbConnection } = require('./db/config');

require('dotenv').config();

// Crear el servidor/aplicación de express
const app = express();

// Configurar el límite de carga
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// Base de datos
dbConnection();

// Directorio público
app.use( express.static('public') )

// Cors
app.use( cors() );

// Lectura y parseo del body
// app.use(bodyParser.json());
app.use( express.json() );

// Rutas
app.use( '/api/auth', require('./routes/auth') );
app.use('/viviendas', require('./routes/viviendas'))

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ 8080 }`);
});
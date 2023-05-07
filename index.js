// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const propiedades = require(__dirname + '/routes/propiedades');

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// app.use('/propiedades', propiedades);
// app.listen(8080);

const express = require('express');
const cors = require('cors');
// const path = require('path');
// const bodyParser = require('body-parser');
const { dbConnection } = require('./db/config');
require('dotenv').config();

// Crear el servidor/aplicación de express
const app = express();

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
app.use('/propiedades', require('./routes/propiedades'))

// Manejar demás rutas
// app.get('*', (req,res) => {
//     res.sendFile( path.resolve(__dirname, 'public/index.html') );
// })

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ 8080 }`);
});
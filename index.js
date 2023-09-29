import express from  'express';
import cors from 'cors';
import usuarios from './src/routes/usuarios.routes.js';
import salon from './src/routes/salon.routes.js';
import grupo from './src/routes/GrupoyProducto.routes.js';
import venta from './src/routes/Venta.routes.js';
import empresa from'./src/routes/empresa.routes.js';
import colores from './src/routes/colores.routes.js';
import cliente from './src/routes/cliente.routes.js';
import propiedades from './src/routes/propiedades.routes.js';

import ticket from './src/routes/tickek.routes.js';
import serializacion from './src/routes/serializacion.routes.js';
import area from './src/routes/area.routes.js';
import {PORT}  from  './config.js';
const app = express();

app.use(express.json());
app.use(cors());

app.use(salon);
app.use(usuarios);
app.use(grupo);
app.use(empresa);
app.use(cliente);
app.use(ticket);
app.use(venta);
app.use(propiedades);
app.use(area);
app.use(colores);
app.use(serializacion);
app.listen(PORT);


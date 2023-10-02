import express from  'express';
import cors from 'cors';
import usuarios from './routes/usuarios.routes.js';
import salon from './routes/salon.routes.js';
import grupo from './routes/GrupoyProducto.routes.js';
import venta from './routes/Venta.routes.js';
import empresa from'./routes/empresa.routes.js';
import colores from './routes/colores.routes.js';
import cliente from './routes/cliente.routes.js';
import propiedades from './routes/propiedades.routes.js';
import caja from './routes/caja.routes.js';
import ticket from './routes/tickek.routes.js';
import serializacion from './routes/serializacion.routes.js';
import area from './routes/area.routes.js'; 
import movimineto from './routes/movimiento.routes.js';
import solicitud from'./routes/solicitud.routes.js';
import detalle from './routes/detalle.routes.js';
import factura from './routes/factura.routes.js';
import producto from './routes/producto.routes.js';
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
app.use(caja);
app.use(area);
app.use(movimineto);
app.use(colores);
app.use(factura);
app.use(producto);
app.use(solicitud);
app.use(detalle);
app.use(serializacion);
app.listen(PORT);


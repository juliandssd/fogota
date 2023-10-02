import {Router} from 'express';
import {productoaumentarstock,productoporid
} from '../controllers/producto.controller.js';
const routes = Router();

routes.put('/api/producto/aumentarstock',productoaumentarstock);
routes.get('/api/producto/mostrarporid/:id_producto',productoporid);
export default routes;
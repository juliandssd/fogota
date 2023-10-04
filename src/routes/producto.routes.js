import {Router} from 'express';
import {productoaumentarstock,productoporid,productoidgrupo,
    productobuscar
} from '../controllers/producto.controller.js';
const routes = Router();

routes.put('/api/producto/aumentarstock',productoaumentarstock);
routes.get('/api/producto/mostrarporid/:id_producto',productoporid);
routes.get('/api/producto/buscar/:buscar/:id_empresa')
routes.get('/api/producto/mostrarporidgrupo/:id_grupo',productoidgrupo);
routes.get('/api/producto/buscar/:buscar/:id_empresa',productobuscar);
export default routes;
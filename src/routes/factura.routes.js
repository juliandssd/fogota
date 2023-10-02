import {Router} from 'express';
import {factura,devolucioninsertar} from '../controllers/factura.controllers.js';

const routes = Router();

routes.get('/api/factura/mostrar',factura);
routes.post('/api/factura/insertar',devolucioninsertar);


export default routes;
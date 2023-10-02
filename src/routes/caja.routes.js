import {Router} from 'express';
import {cajainsertar, mostrarcajaporid} from '../controllers/caja.controller.js';
const routes = Router();

routes.post('/api/cajainsertar',cajainsertar);
routes.get('/api/cajamostrarporid/:id_empresa',mostrarcajaporid);

export default routes;
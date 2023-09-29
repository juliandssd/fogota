import {Router} from 'express';
import {insertarclientestandar} from '../controllers/cliente.controllers.js';
const routes = Router();

routes.post('/api/clienteinsertarstandar',insertarclientestandar);

export default routes;
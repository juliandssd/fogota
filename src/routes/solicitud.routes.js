import {Router} from 'express';
import {solicitudmostrar} from '../controllers/solicitud.controller.js';
const routes = Router();
routes.post('/api/solicitud/mostrar/:id_empresa',solicitudmostrar);

export default routes;
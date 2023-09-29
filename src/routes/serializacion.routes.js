import {Router} from 'express';
import {insertarserializacion} from '../controllers/serializacion.controllers.js';
const routes = Router();

routes.post('/api/serializacioninsertar',insertarserializacion);

export default routes;
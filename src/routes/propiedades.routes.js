import {Router} from 'express';
import {propiedadesinsertar} from '../controllers/propiedades.controllers.js';

const routes = Router();

routes.post('/api/propiedadesinsertar',propiedadesinsertar);

export default routes;
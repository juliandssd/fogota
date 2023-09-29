import {Router} from 'express';
import {coloresinsertar} from '../controllers/colores.controllers.js';
const routes = Router();

routes.post('/api/coloresinsertar',coloresinsertar);

export default routes;
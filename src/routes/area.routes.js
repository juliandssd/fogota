import {Router} from 'express';
import {areainsertar} from '../controllers/area.controller.js';
const routes = Router();

routes.post('/api/areainsertar',areainsertar);

export default routes;
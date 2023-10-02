import {Router} from 'express';
import {propiedadesinsertar,
mostraridpropiedades
} from '../controllers/propiedades.controllers.js';

const routes = Router();

routes.post('/api/propiedadesinsertar',propiedadesinsertar);
routes.get('/api/mostraridpropiedades/:id_empresa',mostraridpropiedades);

export default routes;
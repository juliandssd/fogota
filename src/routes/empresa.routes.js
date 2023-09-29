import {Router} from 'express';
import {EmpresaInsertar,mostraridempresa} from '../controllers/empresa.controllers.js';

const routes = Router();

routes.post('/api/empresainsertar',EmpresaInsertar);
routes.get('/api/empresamostrarporid',mostraridempresa);

export default routes;
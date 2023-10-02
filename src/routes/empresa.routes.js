import {Router} from 'express';
import {EmpresaInsertar,mostraridempresa,mostrarempresaidempresa} from '../controllers/empresa.controllers.js';

const routes = Router();

routes.post('/api/empresainsertar',EmpresaInsertar);
routes.get('/api/empresamostrarporid',mostraridempresa);
routes.get('/api/empresmostrarporid_empresa/:id_empresa',mostrarempresaidempresa);


export default routes;
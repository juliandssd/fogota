import {Router} from 'express';
import {MostrarSalon,MostrarProductoIDgrupo} from '../controllers/GrupoyProducto.controllers.js';

const routes = Router();

routes.get('/grupos/:id_empresa',MostrarSalon);
routes.get('/producto/:id_grupo',MostrarProductoIDgrupo);

export default routes;
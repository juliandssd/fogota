import {Router} from 'express';
import {mostrargrupo,MostrarProductoIDgrupo} from '../controllers/GrupoyProducto.controllers.js';

const routes = Router();

routes.get('/grupos/:id_empresa',mostrargrupo);
routes.get('/producto/:id_grupo',MostrarProductoIDgrupo);

export default routes;
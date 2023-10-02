import {Router} from 'express';
import {mostrarmovimientocaja ,movimientoinsertar
,mostrarcajaporuser,editardinerocaja,mostrarcajaperturada

} from '../controllers/movimiento,controllers.js';
const routes = Router();

routes.get('/api/mostrarmovimientocaja/:id_caja',mostrarmovimientocaja);
routes.get('/api/movimientocajauser/:id_caja/:id_usuario',mostrarcajaporuser);
routes.post('/api/movimientoinsertar',movimientoinsertar);
routes.put('/api/editarcaja',editardinerocaja);
routes.get('/api/movimiento/mostrarcajaperturada',mostrarcajaperturada);

export default routes;
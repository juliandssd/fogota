import {Router} from 'express';
import {MostrarsalonID,MostrarMesaPorIdsalon, editarmesaocupado} from '../controllers/salon.controller.js';
const routes = Router();
routes.get('/api/salon/:id_empresa',MostrarsalonID);
routes.get('/mesa/mesa/:id_salon',MostrarMesaPorIdsalon);
routes.put('/mesa/editarestadomesa/',editarmesaocupado)

export default routes;
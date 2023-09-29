import {Router} from 'express';
import {tickerinsertar} from '../controllers/ticket.controllers.js';
const routes = Router();
routes.post('/api/ticketinsertar',tickerinsertar);

export default routes;
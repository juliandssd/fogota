import {Router} from 'express';
import {MostrarUsuario,usuarioinsertar} from '../controllers/usuarios.controller.js';
const routes = Router();
routes.get('/usuario/:Usuario/:Password',MostrarUsuario);
routes.post('/api/usuarioinsertar',usuarioinsertar);

export default routes;
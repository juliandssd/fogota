import {Router} from 'express';
import {MostrarsalonID,MostrarMesaPorIdsalon, editarmesaocupado,
saloninsertar,mostrarelmaximoid,mesainsertar,mostrarsalonpc,
mostrarmesaporsalonpc,editarnombredemesa,mostraridsalondefault,
MostrarMesaporidsalonPC,mostraridmesero,
mesaenventa,liberarmesa,editarcambiodemesa
} from '../controllers/salon.controller.js';
const routes = Router();
routes.get('/api/salon/:id_empresa',MostrarsalonID);
routes.get('/mesa/mesa/:id_salon',MostrarMesaPorIdsalon);
routes.put('/mesa/editarestadomesa',editarmesaocupado)
routes.post('/api/insertarsalon',saloninsertar)
routes.post('/api/mesainsertar',mesainsertar);
routes.get('/api/mostraridmaximo/:id_empresa',mostrarelmaximoid);
routes.post('/api/mesainsertar',mesainsertar);
routes.get('/api/mostrarsalonpc/:id_empresa',mostrarsalonpc);
routes.get('/api/mesamostrarpc/:id_salon',mostrarmesaporsalonpc);
routes.put('/api/editarnombremesa',editarnombredemesa);
routes.get('/api/mostraridsalondefauld/:id_empresa',mostraridsalondefault);
routes.get('/api/mostrarmesaporidsalon/:id_salon',MostrarMesaporidsalonPC);
routes.get('/api/meseroporid/:id_mesa',mostraridmesero)
routes.put('/api/mesa/mesaenventa',mesaenventa);
routes.put('/api/mesa/liberar',liberarmesa);
routes.put('/api/mesa/editarcambiomesa',editarcambiodemesa);

export default routes;
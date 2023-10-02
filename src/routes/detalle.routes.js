import {Router} from 'express';
import {
    detallemostrar,detallemostrartodoporid,
    detalleliminar,detalleminutos,countmostrardetalle,
    aumentardetalle,disminuirdetalle,editaranticipo,
    detalleaccesopagonull,cambiarnull,editarnota,detallemostrartodo,cambiarpagado
} from '../controllers/detalle.controller.js';
const routes = Router();

routes.get('/api/detalle/mostrar/:id_mesa/:id_venta',detallemostrar);
routes.get('/api/detalle/mostrartodo/:id_detalle',detallemostrartodoporid);
routes.delete('/api/detalle/eliminar/:id_detalle',detalleliminar)
routes.get('/api/detalle/minutos/:id_detalle',detalleminutos);
routes.get('/api/detalle/coundetalle/:id_detalle',countmostrardetalle);
routes.put('/api/detalle/aumentarcant',aumentardetalle);
routes.put('/api/detalle/dismiuircant',disminuirdetalle);
routes.put('/api/detalle/editaranticipo',editaranticipo);
routes.get('/api/detalle/mostraraccesopago/:id_detalle/:estado',detalleaccesopagonull);
routes.put('/api/detalle/cambiarnull', cambiarnull);
routes.put('/api/detalle/editarnota',editarnota);
routes.get('/api/detalle/detallemostrartodo/:id_mesa/:id_venta',detallemostrartodo);
routes.put('/api/detalle/cambiarpagado',cambiarpagado);
export default routes;
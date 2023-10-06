import {Router} from 'express';
import {VentaInsertar,MostrarVentaPorIdmesa,Insertardetalle
,MostrarCountdetalleEspera,VENTA__Editarestado,insertarnotificacion,
validarusuariomesa,ventamostrarporidmesa,ventaporid_venta,
ventamostrarstock,eliminarventa,rpt_precuenta,mostraridmaximoporidmesa
} from '../controllers/venta.controllers.js';
const routes = Router();
routes.post('/api/ventainsertar',VentaInsertar);
routes.post('/api/detalleinsertar',Insertardetalle);
routes.get('/api/venta/poridmesa/:id_mesa/:id_usuario',MostrarVentaPorIdmesa);
routes.get('/api/countdetalleespera/:id_venta',MostrarCountdetalleEspera);
routes.put('/api/editarestado',VENTA__Editarestado);
routes.post('/api/solicitud',insertarnotificacion);
routes.get('/api/ventacontador/:id_movi/:id_empresa');
routes.get('/api/validarusuario/:id_usuario/:id_mesa',validarusuariomesa);
routes.get('/api/venta/mostrarventaid/:id_mesa',ventamostrarporidmesa);
routes.get('/api/venta/porelmismoid/:id_venta',ventaporid_venta);
routes.get('/api/venta/mostrarstock/:id_venta/:id_producto',ventamostrarstock)
routes.delete('/api/venta/eliminarventa/:id_venta',eliminarventa);
routes.get('/api/venta/rpt_preecuenta/:id_venta/:procentaje',rpt_precuenta);
routes.get('/api/venta/mostrarporid_mesamax/:id_mesa',mostraridmaximoporidmesa);
export default routes;
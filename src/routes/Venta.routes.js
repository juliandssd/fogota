import {Router} from 'express';
import {VentaInsertar,MostrarVentaPorIdmesa,Insertardetalle
,MostrarCountdetalleEspera,VENTA__Editarestado,insertarnotificacion,
} from '../controllers/venta.controllers.js';
const routes = Router();
routes.post('/api/ventainsertar',VentaInsertar);
routes.post('/api/detalleinsertar',Insertardetalle);
routes.get('/api/venta/poridmesa/:id_mesa',MostrarVentaPorIdmesa);
routes.get('/api/countdetalleespera/:id_venta',MostrarCountdetalleEspera);
routes.put('/api/editarestado',VENTA__Editarestado);
routes.post('/api/solicitud',insertarnotificacion);
export default routes;
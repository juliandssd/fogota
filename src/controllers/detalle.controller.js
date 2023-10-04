import {pool} from '../db.js';


export const detallemostrar= async(req, res) =>{
    const {id_mesa,id_venta}=req.params;
    const [result]=await pool.query('call DETALLE__mostrar(?,?)',[id_mesa,id_venta]);
    res.json(result[0]);
}

export const detalleaccesopagonull= async(req, res) =>{
    const {id_venta,estado}=req.params;
    const [result]=await pool.query('call DETALLE__MostrarAccesinconfi(?,?)',[id_venta,estado]);
    res.json(result[0]);
}


export const detallemostrartodoporid= async(req, res) =>{
    const {id_detalle}=req.params;
    const [result]=await pool.query('call DETALLE_mostraTodoPorID(?)',[id_detalle]);
    res.json(result[0]);
}


export const detallemostrartodo= async(req, res) =>{
    const {id_mesa,id_venta}=req.params;
    const [result]=await pool.query('call DETALLE__mostrarTodo(?,?)',[id_mesa,id_venta]);
    res.json(result[0]);
}

export const aumentardetalle= async(req, res) =>{
    const {cantidad,id_detalle}=req.body;
    const [result]=await pool.query('call DETALLE__DismiuirElStockYaumeCantidad(?,?)',[cantidad,id_detalle]);
   res.send("Creando");
    console.log(req.body);
}



export const cambiarpagado= async(req, res) =>{
    const {id_venta}=req.body;
    const [result]=await pool.query('call DETALLE__Pagado(?)',[id_venta]);
   res.send("Creando");
    console.log(req.body);
}
export const disminuirdetalle= async(req, res) =>{
    const{cantidad,id_detalle}=req.body;
        const [result]=await pool.query('call DETALLE__AumentarStocYDismuirCantidad(?,?)',[cantidad,id_detalle])
     res.send("Creado");
     console.log(req.body);
}

export const editarnota= async(req, res) =>{
    const{id_detalle,Nota}=req.body;
        const [result]=await pool.query('call detalle__editarNota2_11_2021(?,?)',[id_detalle,Nota])
     res.send("Creado");
     console.log(req.body);
}

export const cambiarnull= async(req, res) =>{
    const{id_detalle,estado}=req.body;
        const [result]=await pool.query('call DATALLE__CambiarEstadoNull(?,?)',[id_detalle,estado])
     res.send("Creado");
     console.log(req.body);
}


export const editaranticipo= async(req, res) =>{
    const{monto,
        id_detalle,
        AccesoPago
    }=req.body;
        const [result]=await pool.query('call DETALLE__Anticipo(?,?,?)',[monto,
            id_detalle,
            AccesoPago])
     res.send("Creado");
     console.log(req.body);
}


export const countmostrardetalle= async(req, res) =>{
    const {id_detalle}=req.params;
    const [result]=await pool.query('call countcompues__MostrarPorIDdetalle(?)',[id_detalle]);
    res.json(result[0]);
}


export const detalleminutos= async(req, res) =>{
    const {id_detalle}=req.params;
    const [result]=await pool.query('call DETALLE__Minutos(?)',[id_detalle]);
    res.json(result[0]);
}

export const detalleliminar= async(req, res) =>{
    const {id_detalle}=req.params;
    const [result]=await pool.query('call DETALLE__Eliminar(?)',[id_detalle]);
    res.send("Creado");
    console.log(req.body);
}



export const Insertardetalleapp= async(req,res)=>{
    const {id_venta,id_producto,Nota}=req.body;
   const [rows]= await pool.query('call DETALLE__insertar(?,?,?)',[id_venta,id_producto,Nota]);
    console.log(req.body);
    res.send("Creado");
}
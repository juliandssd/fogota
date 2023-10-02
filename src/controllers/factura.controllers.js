import {pool} from '../db.js';


export const devolucioninsertar= async(req,res)=>{
    const{
        monto,
        id_movi,
        id_usuario,
        Descripcion,
        minutos,
        fecha
      }=req.body;
    const [rows]= await pool.query('call DEVOLUCIONES__Insertar(?,?,?,?,?,?)',[
        monto,
        id_movi,
        id_usuario,
        Descripcion,
        minutos,
        fecha
    ]);
    console.log(req.body);
    res.send("Creado");
}

export const factura= async(req, res) =>{
    const {id_detalle}=req.params;
    const [result]=await pool.query('select *  from devoluciones',[id_detalle]);
    res.send(result);
}

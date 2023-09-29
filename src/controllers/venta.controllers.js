import {pool} from '../db.js';

export const VentaInsertar= async(req,res)=>{
    const {id_usuario,id_movi,id_mesa,Numero_persona,id_empresa}=req.body;
    const [rows]= await pool.query('call VENTA__insertar(?,?,?,?,?)',[id_usuario,id_movi,id_mesa,Numero_persona,id_empresa]);
    console.log(req.body);
    res.send("Creado");
}


export const MostrarVentaPorIdmesa = async (req, res) => 
{
    const {id_mesa}=req.params;
    const [result]=await pool.query('select *  from venta WHERE id_mesa=?',[id_mesa]);
    res.send(result);
}
export const Insertardetalle= async(req,res)=>{
    const {id_venta,id_producto,Nota}=req.body;
   const [rows]= await pool.query('call DETALLE__insertar(?,?,?)',[id_venta,id_producto,Nota]);
    console.log(req.body);
    res.send("Creado");
}

export const MostrarCountdetalleEspera= async(req, res) =>{
    const {id_venta}=req.params;
    const [result]=await pool.query('select count(*) as total from detalle where Estado="EN ESPERA"  and id_venta=?',[id_venta]);
    res.send(result);
}

export const VENTA__Editarestado=async (req,res)=>{
    const{id_venta}=req.body;
   const [result]= await pool.query('call VENTA__ESPERA(?)',[id_venta])
    res.send("Creado");
    console.log(req.body);
}
export const insertarnotificacion=async (req,res)=>{
    const{id_venta,mesa,id_empresa}=req.body;
   const [result]= await pool.query('call SOLICITUDIMPRESION__Insertar(?,?,?)',[id_venta,mesa,id_empresa])
    res.send("Creado");
    console.log(req.body);
}
import {pool} from '../db.js';

export const VentaInsertar= async(req,res)=>{
    const {id_usuario,id_movi,id_mesa,Numero_persona,id_empresa}=req.body;
    const [rows]= await pool.query('call VENTA__insertar(?,?,?,?,?)',[id_usuario,id_movi,id_mesa,Numero_persona,id_empresa]);
    console.log(req.body);
    res.send("Creado");
}


export const MostrarVentaPorIdmesa = async (req, res) => 
{
    const {id_mesa,id_usuario}=req.params;
    const [result]=await pool.query('select *  from venta WHERE id_mesa=? and Estado!="TERMINADO" and id_usuario?' ,[id_mesa,id_usuario]);
    res.send(result);
}

export const ventamostrarcuenta = async (req, res) => 
{
    const {id_movi,id_empresa}=req.params;
    const [result]=await pool.query('call VENTA__ContadorCuenta()',[id_movi,id_empresa]);
    res.send(result[0]);
}

export const Insertardetalle= async(req,res)=>{
    const {id_venta,id_producto,Nota,cantidad}=req.body;
   const [rows]= await pool.query('call DETALLE__insertar(?,?,?,?)',[id_venta,id_producto,Nota,cantidad]);
    console.log(req.body);
    res.send("Creado");
}

export const MostrarCountdetalleEspera= async(req, res) =>{
    const {id_venta}=req.params;
    const [result]=await pool.query('select count(*) as total from detalle where Estado="EN ESPERA"  and id_venta=?',[id_venta]);
    res.send(result);
}
export const validarusuariomesa= async(req, res) =>{
    const {id_usuario,id_mesa}=req.params;
    const [result]=await pool.query('call VENTA__VentarRegistradaPorEseUsuario(?,?)',[id_usuario,id_mesa]);
    res.send(result[0]);
}
export const eliminarventa= async(req, res) =>{
    const {id_venta}=req.params;
    const [result]=await pool.query('call VENTA__Eliminar(?)',[id_venta]);
    res.send(result);
}



export const ventaporid_venta= async(req, res) =>{
    const {id_venta}=req.params;
    const [result]=await pool.query('call MostrarVentaPorelMismoID(?)',[id_venta]);
    res.send(result[0]);
}

export const VENTA__Editarestado=async (req,res)=>{
    const{id_venta}=req.body;
   const [result]= await pool.query('call VENTA__ESPERA(?)',[id_venta])
    res.send("Creado");
    console.log(req.body);
}

export const ventamostrarporidmesa=async (req,res)=>{
    const{id_mesa}=req.params;
   const [result]= await pool.query('call VENTA__MostrarID(?)',[id_mesa])
   res.json(result[0]);
}
export const mostraridmaximoporidmesa=async (req,res)=>{
    const{id_mesa}=req.params;
   const [result]= await pool.query('call VENTA__MostrarFacturadaPorIDmesa(?)',[id_mesa])
   res.json(result[0]);
}


export const rpt_precuenta= async(req, res) =>{
    const {id_venta,procentaje}=req.params;
    const [result]=await pool.query('call Rpt_PreCuenta(?,?)',[id_venta,procentaje]);
    res.json(result[0]);
}

export const ventamostrarstock=async (req,res)=>{
  
        const{id_venta,id_producto}=req.params;
        const [result]= await pool.query('call VENTA__MostrarStock(?,?)',[id_venta,id_producto])
        res.json(result[0]);
}
export const insertarnotificacion=async (req,res)=>{
    const{id_venta,mesa,id_empresa}=req.body;
   const [result]= await pool.query('call SOLICITUDIMPRESION__Insertar(?,?,?)',[id_venta,mesa,id_empresa])
    res.send("Creado");
    console.log(req.body);
}


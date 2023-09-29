import {pool} from '../db.js';

export const coloresinsertar= async(req,res)=>{
    const {id_empresa}=req.body;
    const [rows]= await pool.query('call COLORES__insertar(?)',[id_empresa]);
    console.log(req.body);
    res.send("Creado");
}


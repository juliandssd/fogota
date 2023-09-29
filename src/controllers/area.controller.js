import {pool} from '../db.js';


export const areainsertar= async(req,res)=>{
    const {id_empresa}=req.body;
    const [rows]= await pool.query('call AreaImpresion__Insertar(?)',[id_empresa]);
    console.log(req.body);
    res.json(rows);
}


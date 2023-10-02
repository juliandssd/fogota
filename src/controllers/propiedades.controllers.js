import {pool} from '../db.js';


export const propiedadesinsertar= async(req,res)=>{
    const {id_empresa}=req.body;
    const [rows]= await pool.query('call insertar_PROPIEDADES(?)',[id_empresa]);
    console.log(req.body);
    res.json(rows);
}


export const mostraridpropiedades= async(req,res)=>{
    const {id_empresa} = req.params;
    const [result] = await pool.query('call PROPIEDADES__MostrarId(?)',[id_empresa]);
    res.json(result[0]);
}
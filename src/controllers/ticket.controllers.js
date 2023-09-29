import {pool} from '../db.js';


export const tickerinsertar= async(req,res)=>{
    const {id_empresa}=req.body;
    const [rows]= await pool.query('call TICKET__Insertar(?)',[id_empresa]);
    console.log(req.body);
    res.json(rows);
}


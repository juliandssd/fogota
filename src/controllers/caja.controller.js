import {pool} from '../db.js';


export const cajainsertar= async(req,res)=>{
    const {Descripcion ,
        Serial_pc  ,
        id_empresa
     }=req.body;
    const [rows]= await pool.query('call CAJA_insertar(?,?,?)',[Descripcion ,
        Serial_pc  ,
        id_empresa]);
    console.log(req.body);
    res.json(rows);
}


export const mostrarcajaporid= async(req,res)=>{
    const {id_empresa} = req.params;
    const [result] = await pool.query('select * from caja where id_empresa=?',[id_empresa]);
    res.json(result);
}

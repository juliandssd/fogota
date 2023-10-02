import {pool} from '../db.js';

export const productoaumentarstock= async(req,res)=>{
    const {id_producto,
        stock

    } = req.body;
    const [result] = await pool.query('call PRODUCTO__Aumentar(?,?)',[id_producto,
        stock
    ]);
    res.json(result);
}
export const productoporid=async (req,res)=>{
    const{id_producto}=req.params;
   const [result]= await pool.query('call PRODUCTO__mostrarCompleto(?)',[id_producto])
   res.json(result[0]);
}
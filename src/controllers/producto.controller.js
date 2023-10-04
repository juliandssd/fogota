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

export const productobuscar=async (req,res)=>{
    const{buscar,id_empresa}=req.params;
   const [result]= await pool.query('call PRODUCTO__Buscar(?,?)',[buscar,id_empresa])
   res.json(result[0]);
}
export const productoidgrupo=async (req,res)=>{
    const{id_grupo}=req.params;
   const [result]= await pool.query('call PRODUCTO__mostrar_por_grupo(?)',[id_grupo])
   res.json(result[0]);
}
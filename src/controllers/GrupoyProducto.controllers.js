import {pool} from '../db.js';
export const MostrarSalon= async(req,res)=>{
    const {id_empresa} = req.params;
    const [result] = await pool.query('SELECT * FROM grupo_de_producto ',[id_empresa]);
    res.json(result);
}

export const MostrarProductoIDgrupo= async(req,res)=>{
    const {id_grupo} = req.params;
    const [result] = await pool.query('SELECT * FROM producto where id_grupo1=?',[id_grupo]);
    res.json(result);
}
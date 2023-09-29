import {pool} from '../db.js';

export const MostrarsalonID =  async(req,res)=>{
    const {id_empresa} = req.params;
    const [result] = await pool.query('SELECT *  FROM salon where id_empresa=?',[id_empresa]);
    res.json(result);
}

export const MostrarMesaPorIdsalon = async(req,res)=>{
    const {id_salon}=req.params;
    const [result] = await pool.query('SELECT mesa, case when Estado_de_disponibilidad="LIBRE" then "Green" else "Red" end as color,concat(id_mesa,"|",Estado_de_disponibilidad)as Unido  FROM mesa where id_salon=?',[id_salon]);
    res.json(result);
}

export const editarmesaocupado=async (req,res)=>{
    const{id_mesa,mesero}=req.body;
   // const [result] =await pool.query('update mesa set Mesero=? where id_mesa=?  ',[mesero,id_mesa])
   const [result]= await pool.query('call MESA_EstadoOcupado(?,?)',[id_mesa,mesero])
    res.send("Creado");
    console.log(req.body);
}
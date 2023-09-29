import {pool} from '../db.js';

export const insertarserializacion =  async(req,res)=>{
    const {
        Serie  ,
Cantidad_de_numeros ,
numerofin  ,
Tipo  ,
Por_defecto ,
id_empresa



    } = req.body;
    const [result] = await pool.query('CALL insertar_Serializacion(?,?,?,?,?,?)',[Serie  ,
        Cantidad_de_numeros ,
        numerofin  ,
        Tipo  ,
        Por_defecto ,
        id_empresa]);
    res.json(result);
}

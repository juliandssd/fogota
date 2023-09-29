import {pool} from '../db.js';

export const MostrarUsuario= async(req,res)=>{
    const {Usuario,Password} = req.params;
    const [result] = await pool.query('SELECT * FROM usuario',[Usuario,Password]);
    res.json(result);
}

export const usuarioinsertar= async(req,res)=>{
    const {Nombre  ,
        usuario ,
        Estado ,
        Rol ,
        Password  ,
        id_empresa }=req.body;
    const [rows]= await pool.query('call USUARIO__insertar(?,?,?,?,?,?)',[Nombre  ,
        usuario ,
        Estado ,
        Rol ,
        Password  ,
        id_empresa ]);
    res.json(rows);
}

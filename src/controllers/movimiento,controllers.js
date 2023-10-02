import {pool} from '../db.js';


export const mostrarmovimientocaja= async(req,res)=>{
    const {id_caja} = req.params;
    const [result] = await pool.query('call MOVIMIENTOCAJA__mostrar_caja(?)',[id_caja]);
    res.json(result[0]);
}
export const mostrarcajaporuser= async(req,res)=>{
    const {id_caja,id_usuario} = req.params;
    const [result] = await pool.query('call MOVIMIENTOCAJA__mostrarPorUser(?,?)',[id_caja,id_usuario]);
    res.json(result[0]);
}

export const mostrarcajaperturada= async(req,res)=>{
    const {id_caja} = req.params;
    const [result] = await pool.query('call MOVIMIENTOCAJA__MostraMovimiento(?)',[id_caja]);
    res.json(result[0]);
}


export const movimientoinsertar= async(req,res)=>{
    const {
        id_usuario,
        id_caja
     }=req.body;
    const [rows]= await pool.query('call MOVIMIENTOCAJA__insertar(?,?)',[
        id_usuario,
        id_caja
    ]);
    console.log(req.body);
    res.json(rows);
}


export const editardinerocaja= async(req,res)=>{
    const {
        dinero ,
        id_caja ,
        id_movi 
     }=req.body;
    const [rows]= await pool.query('call  MOVIMIENTOCAJA__DineroInicial(?,?,?)',[
        dinero ,
id_caja ,
id_movi 
    ]);
    console.log(req.body);
    res.json(rows);
}



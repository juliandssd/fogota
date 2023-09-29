import {pool} from '../db.js';




export const EmpresaInsertar= async(req,res)=>{
    const {Nombre  ,
        Impuesto  ,
        TrabajaConImpuesto  ,
        Carpeta_para_cp ,
        Ultima_fecha_de_cp  ,
        Porcentaje 
        ,imagen }=req.body;
    const [rows]= await pool.query('call EMPRESA__Insertar(?,?,?,?,?,?,?)',[Nombre  ,
        Impuesto  ,
        TrabajaConImpuesto  ,
        Carpeta_para_cp ,
        Ultima_fecha_de_cp  ,
        Porcentaje 
        ,imagen ]);
    console.log(req.body);
    res.send("Creado");
}

export const mostraridempresa= async(req,res)=>{
    const [result] = await pool.query('select max(id_empresa)as id_empresa  from empresa');
    res.json(result);
}


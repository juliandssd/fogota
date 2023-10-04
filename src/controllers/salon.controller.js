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
export const mostrarelmaximoid = async(req,res)=>{
    const {id_empresa}=req.params;
    const [result] = await pool.query('call SALON__MostrarIDmaximo(?)',[id_empresa]);
    res.json(result[0]);
}

export const MostrarMesaporidsalonPC = async(req,res)=>{
    const {id_salon}=req.params;
    const [result] = await pool.query('call Mesa__mostrarMesaPorSalon(?)',[id_salon]);
    res.json(result[0]);
}
export const mostraridmesero = async(req,res)=>{
    const {id_mesa}=req.params;
    const [result] = await pool.query('call MESA__MostrarPorMesero(?)',[id_mesa]);
    res.json(result[0]);
}
export const mostrarsalonpc = async(req,res)=>{
    const {id_empresa}=req.params;
    const [result] = await pool.query('call SALON__mostrar(1,1,?)',[id_empresa]);
    res.json(result[0]);
}

export const mostrarmesaporsalonpc = async(req,res)=>{
    const {id_salon}=req.params;
    const [result] = await pool.query('call Mesa__mostrarMesaPorSalon(?)',[id_salon]);
    res.json(result[0]);
}
export const mostraridsalondefault = async(req,res)=>{
    const {id_empresa}=req.params;
    const [result] = await pool.query('select id_salon,Propina from salon where id_empresa=?',[id_empresa]);
    res.json(result);
}

export const editarmesaocupado=async (req,res)=>{
    const{id_mesa,mesero}=req.body;
   const [result]= await pool.query('call MESA_EstadoOcupado(?,?)',[id_mesa,mesero])
    res.send("Creado");
    console.log(req.body);
}




export const editarcambiodemesa=async (req,res)=>{
    const{id_destino,id_origen}=req.body;
   const [result]= await pool.query('call EditarDvCambioMesa(?,?)',[id_destino,id_origen])
    res.send("Creado");
    console.log(req.body);
}




export const liberarmesa=async (req,res)=>{
    const{id_mesa}=req.body;
   const [result]= await pool.query('call MESA__EstadoLibre(?)',[id_mesa])
    res.send("Creado");
    console.log(req.body);
}


export const editarnombredemesa=async (req,res)=>{
    const{id_venta,id_mesa}=req.body;
   const [result]= await pool.query('call MESA__Editar(?,?)',[id_venta,id_mesa])
    res.send("Creado");
    console.log(req.body);
}

export const mesaenventa=async (req,res)=>{
    const{id_venta,id_mesa}=req.body;
   const [result]= await pool.query('call MESA__EnVentas(?,?)',[id_venta,id_mesa])
    res.send("Creado");
    console.log(req.body);
}

export const saloninsertar= async(req,res)=>{
    const {
        salon, 
id_empresa 
     }=req.body;
    const [rows]= await pool.query('call SALON__Insertar(?,?)',[
        salon ,
        id_empresa 
    ]);
    console.log(req.body);
    res.json(rows);
}
export const mesainsertar= async(req,res)=>{
    const {
        mesa ,
id_salon ,
id_propiedad 
     }=req.body;
    const [rows]= await pool.query('call MESA__insertar(?,?,?)',[
        mesa ,
        id_salon ,
        id_propiedad 
    ]);
    console.log(req.body);
    res.json(rows);
}
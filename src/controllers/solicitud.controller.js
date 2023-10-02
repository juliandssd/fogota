import {pool} from '../db.js';

    export const solicitudmostrar = async (req, res) => 
    {
        const {id_empresa}=req.params;
        const [result]=await pool.query('call SOLICITUDIMPRESION__Mostrar(?)',[id_empresa]);
        res.send(result[0]);
    }
import {createPool} from 'mysql2/promise'
import {
    DB_HOTST,
    DB_PORT,
    db_user,
    DB_PASSWORD,
    DB_DATABASE
}
 from '../config.js';

 export const pool=createPool({
    host:DB_HOTST,
    user: db_user,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port:DB_PORT
})
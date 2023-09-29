import {config} from 'dotenv';

config();
export const PORT = process.env.PORT || 3000
export const DB_HOTST = process.env.DB_HOTST || 'localhost'
export const DB_PORT= process.env.DB_PORT || 3306
export const db_user = process.env.db_user || 'troyres'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'julian2001'
export const DB_DATABASE = process.env.DB_DATABASE || 'troyrestaurante'
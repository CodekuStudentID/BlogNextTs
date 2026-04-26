import mysql, { PoolOptions } from 'mysql2/promise';

const access: PoolOptions = {
  host: process.env.DB_HOST as string,
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

// Jangan masukkan properti ssl jika nilainya false
// Ini cara paling aman agar lolos type check
export const connection = mysql.createPool(access);

import { getConnection } from '../conection/conection';
const sql = require("mssql");


export const InsertComment = async (name, email, comment) => {
    try {
        const pool = await getConnection();
      const result = await pool
        .request()
        .input("name", sql.VarChar(100), name)
        .input("email", sql.VarChar(100),email)
        .input("comment", sql.VarChar(sql.MAX), comment)
        .execute("proc_insertcomments");
      const message = result.recordset;
      console.log(message);

        
    } catch (error) {
      console.error(error);
    }
  };
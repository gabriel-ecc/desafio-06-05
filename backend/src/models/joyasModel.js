import pool from "../../db/config.js";

const getAllJoyas = async () => {
  const sqlQuery =
    "SELECT id, nombre, categoria, metal, precio, stock FROM inventario";
  const response = await pool.query(sqlQuery);
  return response.rows;
};



export { getAllJoyas };

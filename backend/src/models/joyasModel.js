import format from "pg-format";
import pool from "../../db/config.js";

const getAllJoyas = async ({ limits, page, order_by }) => {
  const [columna, direccion] = order_by.split("_");
  const offset = Math.abs((page - 1) * limits);
  const queryWithFormat = format(
    "SELECT id, nombre, categoria, metal, precio, stock FROM inventario ORDER BY %I %s LIMIT %s  OFFSET %s",
    columna,
    direccion,
    limits,
    offset
  );
  console.log(queryWithFormat);
  const { rows: joyasResults } = await pool.query(queryWithFormat);

  return joyasResults;
};

const getJoyasFiltered = async ({
  precio_min,
  precio_max,
  categoria,
  metal,
}) => {
  const sqlQuery = {
    text: "SELECT id, nombre, categoria, metal, precio, stock FROM inventario WHERE precio <= $1 AND precio >= $2 AND categoria = $3 AND metal = $4",
    values: [precio_max, precio_min, categoria, metal],
  };
  console.log(sqlQuery);
  const result = await pool.query(sqlQuery);
  return result.rows;
};

export { getAllJoyas, getJoyasFiltered };

import format from "pg-format";
import pool from "../../db/config.js";

const getAllJoyas = async ({ limits, page, order_by }) => {
  const [columna, direccion] = order_by.split("_");
  const offset = Math.abs((page - 1) * limits)
  const queryWithFormat = format(
    "SELECT id, nombre, categoria, metal, precio, stock FROM inventario ORDER BY %I %s LIMIT %s  OFFSET %s",
    columna,
    direccion,
    limits,
    offset
  );
  console.log(queryWithFormat)
  const { rows: joyasResults } = await pool.query(queryWithFormat);

  return joyasResults;
};

export { getAllJoyas };

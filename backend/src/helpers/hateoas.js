import "dotenv/config";
const port = process.env.port || 3000;
let stock = 0;

const HATEOAS = async (entity, data) => {
  const results = data.map((item) => {
    stock += item.stock;
    return {
      joya: item.nombre,
      href: `http://localhost:${port}/${entity}/${item.id}`,
    };
  });

  const total = data.length;
  const dataWithHateoas = {
    totalJoyas: total,
    stockTotal: stock,
    results,
  };
  return dataWithHateoas;
};

export { HATEOAS };

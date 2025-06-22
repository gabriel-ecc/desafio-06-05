import { getAllJoyas, getJoyasFiltered } from "../models/joyasModel.js";
import { HATEOAS } from "../helpers/hateoas.js";

const getAllJoyasController = async (req, res) => {
  try {
    const allJoyas = await getAllJoyas(req.query);
    const allJoyasWithHateoas = await HATEOAS("joyas", allJoyas);
    res.status(200).json(allJoyasWithHateoas);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

const getJoyasFilteredController = async (req, res) => {
  try {
    const joyasFiltered = await getJoyasFiltered(req.query);
    res.status(200).json(joyasFiltered);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

export { getAllJoyasController,getJoyasFilteredController };

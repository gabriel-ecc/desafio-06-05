import { getAllJoyas } from "../models/joyasModel.js";
import { HATEOAS } from "../helpers/hateoas.js";

const getAllJoyasController = async (req, res) => {
  try {
    const allJoyas = await getAllJoyas();
    const allJoyasWithHateoas = await HATEOAS("joyas", allJoyas);
    res.status(200).json(allJoyasWithHateoas);
  } catch (error) {
    res.status(500).json({error: error.message});
    console.log(error);
  }
};

export { getAllJoyasController };

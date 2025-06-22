import { Router } from "express";
import { getAllJoyasController,getJoyasFilteredController } from "../src/controllers/joyasController.js";

const rutas = Router();

rutas.get("/joyas", getAllJoyasController);
rutas.get("/joyas/filtros", getJoyasFilteredController);
export default rutas;

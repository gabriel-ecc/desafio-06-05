import { Router } from "express";
import { getAllJoyasController } from "../src/controllers/joyasController.js"

const rutas = Router();

rutas.get("/joyas", getAllJoyasController);

export default rutas;
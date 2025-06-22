import express from "express";
import cors from "cors";
import "dotenv/config";
import rutas from "./routes/joyasRoute.js"

const app = express();

const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());

app.listen(port, ()=> {
    console.log(`Servidor encendido http://localhost:${port}`);
})

app.use(rutas);
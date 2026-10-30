import express, { type Request, type Response } from "express"
import { clienteRouter } from "./routes/cliente.route.js"

const app = express()
const port = 3000

app.use(express.json())
app.get("/cliente", clienteRouter)

app.use(express.json())
app.get("/cliente", clienteRouter)

app.listen(port, () => console.log("API rodando..."))
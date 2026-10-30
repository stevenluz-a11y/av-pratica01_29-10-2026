import { clienteService } from ".services/cliente.services.js"

clienteRouter.get("/",async(_req, res) => {
    const cliente = await clienteService.getAll()
    return res.json(cliente)
})

clienteRouter.post("/",async (req, res) => {
    const cliente = await clienteService.create(req.body)
    return res.status(201).json(cliente)
})

//export { clienteRoute } from "./routes/cliente.route.js"
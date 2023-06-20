import express, { Application } from "express"
import { logController, newlogController, postController } from "./controllers/controller"

const app: Application = express()


 //con este midelware le decimos a express que analice atuomaticamente cualquier cueropo JSON de las 
 //solicitudes entrantes y hacerlo accesible en req.body.

app.use(express.json())

app.get("/", logController)

app.patch("/", logController)

app.delete("/", logController);

app.get("/new-route", newlogController)

app.post("/log", postController)


app.listen(3000, ()=>{
    console.log("El servidor esta escuchando en el puerto 3000")
})

import express, {Express} from "express"

import studentRoutes from "../routes/students"
import camadasRoutes from "../routes/camadas"

import { conectarDB } from "../database/config"

export class Server {
    app: Express

    constructor(){
        this.app = express()
        this.conexionaDB();
        this.middlewares();
        this.routes();
    }

    async conexionaDB():Promise<void>{
        await conectarDB()
    }

    middlewares(): void {
        this.app.use(express.json())
    }

    routes(): void{
        this.app.use("/students", studentRoutes)
        this.app.use("/camadas", camadasRoutes)
    }

    listen(): void{
        this.app.listen(8080, ()=>{
            console.log("Corriendo en el puerto 8080")
        })
    }
}
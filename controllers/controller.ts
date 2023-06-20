import { Request, Response } from "express";

const logController = (req: Request, res: Response):void =>{
    const method = req.method
    const tiempodePeticion = new Date().toLocaleDateString()

    console.log(`${tiempodePeticion} Método: ${method} ejecutado en el controlador de log`)
    // res.send("hola desde el servidor")
    res.json({
        message: "Hola desde el controlador de log",
        method, 
        tiempodePeticion
    })
}

const newlogController = (req:Request, res:Response):void=>{
    const method = req.method
    const tiempodePeticion = new Date().toLocaleDateString()
    console.log(`${tiempodePeticion} Método: ${method} ejecutado en el controlador de nueva Ruta`)
    // res.send("hola desde el servidor")
    res.json({
        message: "Hola desde el controlador de nueva ruta",
        method, 
        tiempodePeticion
    })
}

const postController = (req: Request, res: Response):void=>{
    const method = req.method
    const tiempodePeticion = new Date().toLocaleDateString()
    console.log(`${tiempodePeticion} Método: ${method} ejecutado en el controlador de nueva Ruta`)

    const saludo = req.body
    console.log({saludo})

    if (!saludo) {
        console.error(`[${tiempodePeticion}] ¡Falta el campo 'saludo' en la solicitud!`);
        res.status(404).json({
            error: 'Campo faltante',
            message: "Falta el campo 'saludo' en la solicitud",
        });
        return;
    }

    res.json({
        message: "Hola desde el controlador de post",
        saludo,
        method, 
        tiempodePeticion
    })
 }

export {
    logController,
    newlogController,
    postController
}
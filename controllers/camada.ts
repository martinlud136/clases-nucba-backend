import { Request, Response } from "express";

import Camada, {ICamada} from "../models/camada";

export const createCamada =async (req:Request, res: Response) => {
    
    const camadaData: ICamada = req.body

    const {nombre, diasDeCursada, modulo} = camadaData

    if(!nombre || !diasDeCursada || !modulo){
        res.json({
            msj: "Faltan datos necesarios en la petición"
        })
        return
    }

    const camadaEnDB = await Camada.findOne({nombre: nombre})

    if(camadaEnDB){
        res.json({
            msj: "La camada ya existe en la DB"
        })
        return
    }

    const camada = new Camada(camadaData)

    await camada.save()

    res.json({
        msj: "Todo ok",
        camada
    })

}
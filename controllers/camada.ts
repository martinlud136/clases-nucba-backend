import { Request, Response } from "express";

import Camada, {ICamada} from "../models/camada";

import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient()

export const createCamada =async (req:Request, res: Response) => {
    
    const camadaData: ICamada = req.body

    const {nombre, diasDeCursada, modulo} = camadaData

    if(!nombre || !diasDeCursada || !modulo){
        res.json({
            msj: "Faltan datos necesarios en la petición"
        })
        return
    }

    // const camadaEnDB = await Camada.findOne({nombre: nombre})

    const camadaEnDB = await prisma.camada.findUnique({
        where: {
            nombre: nombre
        }
    })

    if(camadaEnDB){
        res.json({
            msj: "La camada ya existe en la DB"
        })
        prisma.$disconnect();
        return
    }

    // const camada = new Camada(camadaData)

    // await camada.save()

    const camada = await prisma.camada.create({
        data:{
            nombre,
            diasDeCursada,
            modulo
        }
    })

    prisma.$disconnect()
    
    res.json({
        msj: "Todo ok",
        camada
    })

}
import {Request, Response} from "express"

import Student, {IStudent, IStudentSQL} from "../models/student"
import Camada from "../models/camada"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const createStudent =async (req:Request, res: Response) => {

    const studentData:IStudentSQL = req.body

    const {dni, nombre, camada, email} = studentData

    if(!dni || !nombre || !camada || !email){
        res.json({
            msj: "Faltan datos necesarios en la peticion"
        })
        return
    }

    // const camadaData = await Camada.findOne({nombre:camada})
    const camadaData = await prisma.camada.findUnique({
        where:{
            nombre: camada
        }
    })

    if(!camadaData){
        res.json({
            msj: "La camada no se encontró en la base de datos"
        })
        prisma.$disconnect()
        return
    }

    // const alumnEnDB = await Student.findOne({dni:dni})
    const alumnoEnDB = await prisma.student.findUnique({
        where: {
            dni: dni
        }
    })

    if(alumnoEnDB){
        res.json({
            msj: "El alumno ya está registrado"
        })
        prisma.$disconnect()
        return
    }



    // const student = new Student({
    //     dni,
    //     nombre,
    //     email,
    //     camada: camadaData?._id
    // })

    // await student.save()

    const student = {
        dni,
        nombre,
        email,
        camada: camadaData?.nombre
    }

    const studentToSave = await prisma.student.create({
        data: student
    })

    prisma.$disconnect()
    
    res.json({
        msj:"Todo ok",
        student
    })
}

export const getStudents =async ({}, res:Response) => {
    const condicion = { estado: true}

    // const students: IStudent[] = await Student.find(condicion)

    const students = await prisma.student.findMany({
        where: condicion
    })
    prisma.$disconnect()
    res.json({
        students
    })
}

export const getStudentByDNI =async (req:Request, res:Response) => {
    const { dni } = req.params

    // const student: IStudent | null = await Student.findOne({dni:dni})
    // .populate("camada", "nombre")

    const student = await prisma.student.findUnique({
        where: {
            dni: parseInt(dni)
        }
    })

    prisma.$disconnect()

    res.json({
        student
    })
}


export const updateStudent = async (req: Request, res: Response) => {
    const { dni } = req.params;

    const {estado, camada, ...data} = req.body;

    // const student = await Student.findOneAndUpdate({dni: dni}, data,{new:true} );

    const student = await prisma.student.update({
        where:{
            dni: +dni
        },
        data: data
    })

    res.json({
        student
    })
};

export const deleteStudent = async (req: Request, res: Response) => {
    const { dni } = req.params;

    // const student = await Student.findOneAndDelete({dni:dni});

    // const student = await Student.findOneAndUpdate(
    //     {dni:dni},
    //     {estado: false},
    //     {new: true}
    // )

    const student = await prisma.student.update({
        where:{
            dni: +dni
        },
        data:{
            estado: false
        }
    })

    if(!student) {
        res.json({
            msg: "El alumno no fue enocntrado en la DB"
        })
        prisma.$disconnect()
        return
    }

    prisma.$disconnect()

    res.json({
        student
    })
    
}
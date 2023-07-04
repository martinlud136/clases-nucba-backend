import {Request, Response} from "express"

import Student, {IStudent} from "../models/student"
import Camada from "../models/camada"

export const createStudent =async (req:Request, res: Response) => {

    const studentData:IStudent = req.body

    const {dni, nombre, camada, email} = studentData

    if(!dni || !nombre || !camada || !email){
        res.json({
            msj: "Faltan datos necesarios en la peticion"
        })
        return
    }

    const camadaData = await Camada.findOne({nombre:camada})

    if(!camadaData){
        res.json({
            msj: "La camada no se encontró en la base de datos"
        })
        return
    }

    const alumnEnDB = await Student.findOne({dni:dni})

    if(alumnEnDB){
        res.json({
            msj: "El alumno ya está registrado"
        })
    }

    const student = new Student({
        dni,
        nombre,
        email,
        camada: camadaData?._id
    })

    await student.save()
    
    res.json({
        msj:"Todo ok",
        student
    })
}

export const getStudents =async ({}, res:Response) => {
    const condicion = { estado: true}

    const students: IStudent[] = await Student.find(condicion)

    res.json({
        students
    })
}

export const getStudentByDNI =async (req:Request, res:Response) => {
    const { dni } = req.params

    const student: IStudent | null = await Student.findOne({dni:dni})
    .populate("camada", "nombre")

    res.json({
        student
    })
}


export const updateStudent = async (req: Request, res: Response) => {
    const { dni } = req.params;

    const {estado, camada, ...data} = req.body;

    const student = await Student.findOneAndUpdate({dni: dni}, data,{new:true} );

    res.json({
        student
    })
};

export const deleteStudent = async (req: Request, res: Response) => {
    const { dni } = req.params;

    // const student = await Student.findOneAndDelete({dni:dni});

    const student = await Student.findOneAndUpdate(
        {dni:dni},
        {estado: false},
        {new: true}
    )

    if(!student) {
        res.json({
            msg: "El alumno no fue enocntrado en la DB"
        })
        return
    }

    res.json({
        student
    })
    
}
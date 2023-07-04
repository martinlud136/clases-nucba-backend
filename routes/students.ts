import { Router } from "express"

import { createStudent, getStudents, getStudentByDNI, updateStudent,deleteStudent } from "../controllers/students" 

const router = Router()

router.post("/", createStudent)

router.get("/", getStudents)

router.get("/:dni", getStudentByDNI)

router.put("/:dni", updateStudent)

router.delete("/:dni", deleteStudent)

export default router
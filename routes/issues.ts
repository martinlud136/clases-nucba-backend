import { Router } from "express";
import { postNewIssue } from "../controllers/issues";
import validarJWT from "../middlewares/validarJWT";
import { isAdmin } from "../middlewares/validarRol";
import { check } from "express-validator";
import { recolectarErrores } from "../middlewares/recolectarErrores";


const router = Router();

router.post("/", [validarJWT, isAdmin,
    check("title", "El título es obligatorio").not().isEmpty(),
    check("description", "La descripción es obligatoria",).not().isEmpty(),
    check("priority", "La prioridad es obgligatoria").not().isEmpty(),
    recolectarErrores
], postNewIssue);

export default router;

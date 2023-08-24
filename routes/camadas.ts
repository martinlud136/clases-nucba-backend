import { Router } from "express"

import { createCamada} from "../controllers/camada" 

const router = Router()

router.post("/", createCamada)

export default router
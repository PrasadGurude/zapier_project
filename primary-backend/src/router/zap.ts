
import { Router } from "express";

export const router = Router()


router.post('/',authMiddleware,(req ,res)=>{
    console.log("create zap")
})
router.post('/',authMiddleware,(req ,res)=>{
    console.log("user handler")
})

export const userRouter = router;
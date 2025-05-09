
import { Router } from "express";

export const router = Router()

router.post('/signup',(req ,res)=>{
    console.log("signup handler")
})

router.post('/signin',(req ,res)=>{
    console.log("signin handler")
})
router.post('/user',authMiddleware,(req ,res)=>{
    console.log("user handler")
})

export const userRouter = router;
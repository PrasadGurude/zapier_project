import { NextFunction , Response , Request } from "express";

export default function authMiddleware (req:Request , res:Response , next:NextFunction){

    next()
    
}
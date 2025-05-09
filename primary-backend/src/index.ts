import express from "express";
import {userRouter} from "./router/user"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/v1/user',userRouter)
app.use('/api/v1/zap',zapRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
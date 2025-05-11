import express from "express";
import {userRouter} from "./router/user"
import { zapRouter } from "./router/zap";
import { actionRouter } from "./router/action";
import { triggerRouter } from "./router/trigger";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/v1/user',userRouter)
app.use('/api/v1/zap',zapRouter)
app.use('/api/v1/action',actionRouter)
app.use('/api/v1/trigger',triggerRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
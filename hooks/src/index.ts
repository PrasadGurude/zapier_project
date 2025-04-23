import express from "express";
import { PrismaClient } from "./generated/prisma";

const client  =  new PrismaClient()

const app = express();
const port = 3000;

// https://hooks.zapier.com/hooks/catch/22591153/2xizz0t/

app.post("/hooks/catch/:userId/:zapId/",async (req, res) => {

    const userId = req.params.userId;
    const zapId = req.params.zapId;
    const body = req.body

    // soter in deb a new trigger
    await client.$transaction(async tx => {
        const run = await tx.zapRun.create({
            data : {
                zapId: zapId,
                metadata:body
            }
        });

        await tx.zapRunOutbox.create({
            data:{
                zapRunId: run.id
            }
        })
    })

    // push it on to a queue {kafka / redis}
    
});

app.listen(port,()=>{
    console.log("server is up and running at port 3000")
})
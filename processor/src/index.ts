import { Kafka } from "kafkajs";
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const TOPIC_NAME = 'zap-event'

const kafka = new Kafka({
    clientId: 'outbox-processor',
    brokers: ['localhost:9092']
})

async function main() {
    const producer = kafka.producer()
    await producer.connect()
    while (1) {
        const pendingRows = await prisma.zapRunOutbox.findMany({
            where: {},
            take: 10
        })

        await producer.send({
            topic: TOPIC_NAME,
            messages: pendingRows.map(r => {
                return {
                    value: r.zapRunId
                }
            })
        })
        
        await prisma.zapRunOutbox.deleteMany({
            where: {
                id: {
                    in: pendingRows.map(r => r.id)
                }
            }
        })
    }
}
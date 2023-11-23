import { config } from 'dotenv'
import { connect, connection } from 'mongoose'

export const connectToMongoDB = async () => {
    config()
    await connect(process.env.MONGODB_CONNECTION_URL, {
        dbName: "candles",
    })
    connection.on('error', console.error.bind(console, 'Connection error:'))
    connection.once('open', () => console.log('Connected to MongoDB'))
    console.log('Connected to MongoDB')

}
import { Candle, CandleModel } from "../models/CandleModel"

export default class CandleController {

    async save(candle: Candle): Promise<Candle> {
        console.log('Saving candle')
        await CandleModel.db.collection('newCandles').insertOne(candle, {
            writeConcern: {
                w: 'majority',
                wtimeout: 25000
            }
        })
        return candle
    }

    async findLastCandles(quantity: number): Promise<Candle[]> {
        const n = quantity > 0 ? quantity : 10

        const lastCandles: Candle[] =
            await CandleModel
                .find()
                .sort({ _id: -1 })
                .limit(n)

        return lastCandles
    }
}
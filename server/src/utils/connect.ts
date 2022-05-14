import mongoose from "mongoose"
import config from 'config'
import logger from './logger'

const connect = async () => {
    const mongoUrl = config.get<string>('dbUri')

    try {
        await mongoose.connect(mongoUrl)
        logger.info("DB connected")
    } catch(error) {
        logger.error("Cloud not connect to DB")
        process.exit(1)
    }
}

export default connect
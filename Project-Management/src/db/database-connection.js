import mongoose from "mongoose"

const connectDB= async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MONGODB connected")
    } catch (error) {
        console.error(`MongoDB connection error`, error)
        process.exit(1)
    }
}

export {connectDB};
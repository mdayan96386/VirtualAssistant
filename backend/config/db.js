import mongoose from "mongoose"

const connectDb=async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`DB CONNECTION SUCCESS : ${conn.connection.name}`.bgGreen.black)
    } catch (error) {
        console.log(`DB CONNECTION FAILED : ${error.message}`.bgRed.black)
    }
}

export default connectDb
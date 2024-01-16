import mongoose from 'mongoose'

export const connectDb = async()=>{
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const conn = mongoose.connection;
        conn.on('connected',()=>{
            console.log('Database is connected')
        })
        conn.on('error',()=>{
            console.log("there is some problem in mongouri")
        })
    } catch (error) {
        console.log(error)
    }
}
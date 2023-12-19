import mongoose from "mongoose"

export const connectDB = async () => {
  const connection = {}
  try {
    if (connection.isConnected) {
      return
    }
    const db = await mongoose.connect(process.env.MONGO_URI)
    connection.isConnected = db.connections[0].readyState
  } catch (err) {
    console.log("string connection: " + process.env.MONGO_URI)
    console.log(err)
    throw new Error(err)
  }
}

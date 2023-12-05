import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const URI = process.env.MONGO_URI;
const connectDB = () => {
    mongoose.connect(URI)
        .then(() => {
            console.log(`Connected to DB`.green.bold);
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
            process.exit();
        })
}

export default connectDB;
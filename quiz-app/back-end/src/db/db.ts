import mongoose, { Error } from "mongoose";
import { config } from "../utils/db";

async function connectToDatabase() {
    try {
        await mongoose.connect(`mongodb+srv://gsbloogs194:JtCjZY4ZiZYwx6FC@nodesystem.kyzz3ns.mongodb.net/?retryWrites=true&w=majority&appName=NodeSystem`);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

export default connectToDatabase;

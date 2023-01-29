import { MONGODB_URI } from "./config" 
import mongoose, { connect } from "mongoose";

mongoose.set("strictQuery", false);

(async() => {
    try {
        const db = await connect(MONGODB_URI)
        console.log("DB connected to", db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();


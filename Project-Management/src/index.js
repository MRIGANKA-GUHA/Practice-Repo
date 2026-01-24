import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./db/database-connection.js";
dotenv.config({
    path: "./.env",
});

const port = process.env.PORT || 6969;

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`App listening on port http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.log("MONGODB connection error", err);
    });


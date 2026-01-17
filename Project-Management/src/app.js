import express from "express";
import cors from "cors";
const app = express();

//Basic configuration
app.use(express.json({limit : "16Kb"}))       //it will take json data input upto 16kb
app.use(express.urlencoded({ extended: true, limit: "16Kb"}))    //it will take data from url upto 16kb
app.use(express.static("public"))      //it help to serve the public folder things to the browser

//CORS configuration

app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST","PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))



export default app;

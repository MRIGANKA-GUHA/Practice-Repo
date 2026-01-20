import express from "express";
import cors from "cors";
import {router} from "./routes/healthcheck-routes.js"
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

//Healthcheck route

app.use("/api/v1/healthcheck", router)  //it declare the path when somebody search that url and then it goes to that route after that / things it check by the router
                                         

export default app;

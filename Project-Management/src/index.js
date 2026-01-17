import dotenv from "dotenv";
import app from "./app.js";
dotenv.config({
    path: "./.env",
});

const port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});

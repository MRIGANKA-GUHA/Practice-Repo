import dotenv from "dotenv"

dotenv.config({
    path: "./.env"
});

let myusername= process.env.name;

console.log(myusername)

console.log("Hello World");

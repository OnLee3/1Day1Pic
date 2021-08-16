
import "./db.js";
import express from "express";
import multer from "multer";
import rootRouter from "./routers/rootRouter.js"
import picRouter from "./routers/picRouter.js";

// express app, PORT
const app = express();
const PORT = 4000;

app.use(express.urlencoded({extended:true}));

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views")
app.use("/uploads", express.static("uploads"))

app.use("/", rootRouter);
app.use("/pic", picRouter);

const handleListening = () => console.log(`Server listening on ${PORT} ❤️`)

app.listen(PORT, handleListening)




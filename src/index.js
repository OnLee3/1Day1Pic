
import "./db.js";
import express from "express";

//model
import Picture from "./models/Picture.js"

// express app, PORT
const app = express();
const PORT = 4000;

app.use(express.urlencoded({extended:true}));

// Controllers

const home = async (req, res) => {
    const pictures = await Picture.find({});
    console.log(pictures);
    res.render("home")
}

const getUpload = (req, res) => {
    res.render("upload")
}

const postUpload = (req, res) => {
    console.log(req.body)
    return res.redirect("/")
}

// Routers
/*

Global
Home

User
profile
join
login

picture
picture:id


*/
app.get("/", home)
app.route("/upload").get(getUpload).post(postUpload)


app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views")

const handleListening = () => console.log(`Server listening on ${PORT} ❤️`)

app.listen(PORT, handleListening)




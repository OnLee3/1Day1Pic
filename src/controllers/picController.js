//model
import Picture from "../models/Picture.js"

export const home = async (req, res) => {
    const pictures = await Picture.find({});
    console.log(pictures);
    res.render("home", {pictures})
}

export const getPicture = async (req, res) => {
    const { id } = req.params;
    const pic = await Picture.findById(id);
    console.log(pic)
    res.render("picDetail", {pic})
}

export const getUpload = (req, res) => {
    res.render("upload")
}

export const postUpload = async (req, res) => {
    const {title, description} = req.body;
    console.log(title, description);
    console.log(req.file)
    const {path} = req.file;
    try
    {
        const newPicture = await Picture.create({
        title,
        description,
        picUrl : path,
    })
    return res.redirect("/")
    } catch(error){
        return res.status(400).render("upload")
    }
}
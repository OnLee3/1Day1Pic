import express from "express";
import {getPicture, getUpload, postUpload } from "../controllers/picController.js"
import multer from "multer";

const uploadFiles = multer({ dest : "uploads/" })

const picRouter = express.Router();

picRouter.route("/upload").get(getUpload).post(uploadFiles.single("pic"), postUpload)
picRouter.get("/:id", getPicture);

export default picRouter;
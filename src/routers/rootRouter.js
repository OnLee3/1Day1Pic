import express from "express";
import { home } from "../controllers/picController.js"
import { join, login } from "../controllers/userController.js";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/join", join)
rootRouter.get("/login", login);

export default rootRouter;
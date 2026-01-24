import { Router } from "express";
import { registerUser } from "../controllers/auth-controller.js";
import { validate } from "../middlewares/validator-middleware.js";
import {
    userLoginValidator,
    userRegisterValidator,
} from "../validators/index.js";
import {
    login,
    logoutUser,
    getCurrentUser,
} from "../controllers/auth-controller.js";
import { verifyJWT } from "../middlewares/auth-middleware.js";

const router = Router();

router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(userLoginValidator(), validate, login);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/getCurrentUser").post(verifyJWT, getCurrentUser);

export { router };

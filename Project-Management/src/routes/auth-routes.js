import { Router } from "express";
import { registerUser } from "../controllers/auth-controller.js";
import { validate } from "../middlewares/validator-middleware.js";
import {
    userLoginValidator,
    userRegisterValidator,
} from "../validators/index.js";
import { login } from "../controllers/auth-controller.js";

const router = Router();

router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(userLoginValidator(), validate, login);

export { router };

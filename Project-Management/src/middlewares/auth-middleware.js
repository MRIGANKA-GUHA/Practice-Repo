import { User } from "../models/user-model.js";
import { apiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";
import jwt from "jsonwebtoken"

const verifyJWT = asyncHandler(async (req, res, next) => {
    const token =
        req.cookies?.accessToken ||
        req.header("Authorization")?.replace("Bearer ", ""); //Bearer is used for mobile Application

    if (!token) {
        throw new apiError(401, "Unauthorized request");
    }

    try {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decodedToken?._id).select(
            "-password -refreshToken -emailVerificationToken -emailVerificationExpiry",
        );

        if (!user) {
            throw new apiError(401, "Invalid access token");
        }

        req.user = user;
        next();
    } catch (error) {
        throw new apiError(401, "Invalid access token");
    }
});

export { verifyJWT };

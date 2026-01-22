import { User } from "../models/user-model.js";
import { apiResponse } from "../utils/api-response.js";
import { apiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";
import { emailVerificationMailgenContent, sendEmail } from "../utils/mail.js";

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });
        return { accessToken, refreshToken };
    } catch (error) {
        throw new apiError(
            500,
            "Something went wrong while generating access and refresh token",
        );
    }
};

const registerUser = asyncHandler(async (req, res) => {
    const { email, username, password, role } = req.body;

    const existedUser = await User.findOne({
        $or: [{ username }, { email }], //it will find the user with same username or email
    });

    if (existedUser) {
        throw new apiError(
            409,
            "User with email or username already exists",
            [],
        );
    }

    const user = await User.create({
        email,
        password,
        username,
        isEmailVerified: false,
    });

    const { unHashedToken, hashedToken, tokenExpiry } =
        user.generateTemporaryToken();

    user.emailVerificationToken = hashedToken;
    user.emailVerificationExpiry = tokenExpiry;

    await user.save({
        validateBeforeSave: false,
    });

    await sendEmail({
        email: user?.email, //it checks the user is there or not
        subject: "Please verify your email",
        mailgenContent: emailVerificationMailgenContent(
            user.username,
            `${req.protocol}://${req.get("host")}/api/v1/users/verify-email/${unHashedToken}`,
        ),
    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken -emailVerificationToken -emailVerificationExpiry", // it excludes the fields which shouldnt be returned
    );

    if (!createdUser) {
        throw new apiError(
            500,
            "Something went wrong while registering a user",
        );
    }

    return res
        .status(201)
        .json(
            new apiResponse(
                200,
                { user: createdUser },
                "User registered successfully and mail has been sent to your email",
            ),
        );
});

const login = asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;

    if (!username && !email) {
        throw new apiError(400, "Username or Email is required");
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw new apiError(400, "User doesn't exists");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
        throw new apiError(400, "Invalid credentials");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
        user._id,
    );

    const loggedInUser = await User.findById(user._id).select(
        "-password -refreshToken -emailVerificationToken -emailVerificationExpiry",
    );

    const options = {
        httpOnly: true,
        secure: true,
    };

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("responseToken", refreshToken, options)
        .json(
            new apiResponse(
                200,
                {
                    user: loggedInUser,
                    accessToken,
                    refreshToken,
                },
                "User logged in Successfully",
            ),
        );
});

export { registerUser, login };

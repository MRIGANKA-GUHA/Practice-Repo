import { apiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

const healthCheck = asyncHandler(
    async (req, res) => {
    res.status(200) //it tells the browser everything is ok
        .json(                                                       //it basically sends the response to the user
            new apiResponse(200, { message: "Server is Running" }),
        );
}
)

export { healthCheck };

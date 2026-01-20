import { apiResponse } from "../utils/api-response.js";
import { apiError } from "../utils/api-error.js";

const healthCheck = (req, res) => {
    try {
        res.status(200) //it tells the browser everything is ok
            .json(
                //it basically sends the response to the user
                new apiResponse(200, { message: "Server is Running" }),
            );
    } catch (error) {
        res.status(500).json(
            new apiError(500, { message: "Something wrong with Healthcheck" }),
        );
    }
};

export { healthCheck };

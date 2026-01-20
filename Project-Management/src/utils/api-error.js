class apiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = "",
    ) {
        (super(message),
            (this.statusCode = statusCode),
            (this.data = null),
            (this.message = message), //I think there is no need of this.message as already super(message) is there
            (this.success = false),
            (this.errors = errors));

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor); // It capture the error and push in the stack
        }
    }
}

export { apiError };

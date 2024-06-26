module.exports = class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static HttpException(message) {
        return new ApiError(400, message)
    }

    static ForbiddenError() {
        return new ApiError(403, 'Access denied')
    }

    static UnauthorizedError() {
        return new ApiError(401, 'User is not auth')
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors);
    }
}
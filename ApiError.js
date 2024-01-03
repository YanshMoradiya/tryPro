class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        console.log('error')
        this.statusCode = statusCode;
        this.isOperational = true;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

        Error.captureStackTrace(this, this.constructor)
    }
}

export { ApiError };
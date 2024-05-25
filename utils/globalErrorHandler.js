const globalErrorHandler = (error, res, res, next) => {
    error.status = error.status || "Server Error"
    error.statusCode = error.statusCode || 500

    res.status(statusCode).json({
        status: error.status,
        message: error.message
    })
}
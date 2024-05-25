const asyncErrorHandler = (requestErrorHandler) => {
    return (req, res, next) => {
        requestErrorHandler(req, res, next).catch(err => next(err))
    }
}

export default asyncErrorHandler
const handleMongooseError = (error, data, next) => {
    if (error) {
        next(HttpError(400, error.message));
    } else {
        next();
    }
};

module.exports = handleMongooseError;
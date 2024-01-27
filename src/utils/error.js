class BadUserRequestError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
    this.errorType = "BadUserRequestError";
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
    this.errorType = "NotFoundError";
  }
}

class UnAuthorizedError extends Error {
  constructor(message) {
    super(message);
    this.status = 401;
    this.errorType = "UnAuthorizedError";
  }
}

class InternalServerError extends Error {
  constructor(message) {
    super(message);
    this.status = 500;
    this.errorType = "InternalServerError";
  }
}
class BadGatewayError extends Error {
  constructor(message) {
    super(message);
    this.status = 502;
    this.errorType = "BadGatewayError";
  }
}
class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.status = 409;
    this.errorType = "ConflictError";
  }
}

export {
  BadUserRequestError,
  NotFoundError,
  UnAuthorizedError,
  InternalServerError,
  BadGatewayError,
  ConflictError,
};

class AppError extends Error {
  isOperational: boolean;
  statusCode: number;
  status: string;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;

    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    // @ts-ignore
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;

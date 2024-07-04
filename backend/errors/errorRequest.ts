export class ApiError {
  status: number;
  message: string;
  date: Date;

  constructor(status: number, message: string, date: Date) {
    this.status = status;
    this.message = message;
    this.date = date;
  }

  static badRequest(message: string) {
    return new ApiError(400, message, new Date(Date.now()));
  }

  static notFound(message: string) {
    return new ApiError(404, message, new Date(Date.now()));
  }

  static internalServerError(message: string) {
    return new ApiError(500, message, new Date(Date.now()));
  }

  static unauthorized() {
    return new ApiError(401, "Пользователь не авторизован", new Date(Date.now()));
  }
}

import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

/* eslint-disable @typescript-eslint/no-empty-function */
export class ErrorHandler {
  private static instance: ErrorHandler;

  private constructor() {}

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  verifyError(error: any): void {
    if (error.code === 'ER_DUP_ENTRY') {
      console.error('Error: el registro ya existe en la base de datos');
      throw new BadRequestException(
        'Error: el registro ya existe en la base de datos',
      );
    }
    throw error;
  }
}

export default ErrorHandler.getInstance();

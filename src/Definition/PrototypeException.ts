import { AbstractError } from '../Exception/AbstractError';

export class PrototypeException extends AbstractError {
  constructor(message: string) {
    super(message);
  }
}

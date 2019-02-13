import { ContainerExceptionInterface } from '../Container/ContainerExceptionInterface';

export abstract class AbstractError extends Error
  implements ContainerExceptionInterface {
  protected constructor(message: string) {
    super(message);

    this.name = this.constructor.name;
  }
}

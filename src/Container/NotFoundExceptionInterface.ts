import { ContainerExceptionInterface } from './ContainerExceptionInterface';

/**
 * No entry was found in the container.
 */
export class NotFoundExceptionInterface extends Error
  implements ContainerExceptionInterface {
  constructor(message) {
    super(message);
    this.name = 'NotFoundExceptionInterface';
  }
}

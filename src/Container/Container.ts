import { ContainerInterface } from './ContainerInterface';
import { NotFoundExceptionInterface } from './NotFoundExceptionInterface';
import { ServiceNotEligibleException } from '../Exception/ServiceNotEligibleException';

export class Container<T> implements ContainerInterface {
  private services: Map<string, T>;

  constructor() {
    this.services = new Map<string, T>();
  }

  public has(id: string): boolean {
    return this.services.has(id);
  }

  public get(id: string): any {
    if (!this.has(id)) {
      throw new NotFoundExceptionInterface('Container does not exist');
    }

    return this.services.get(id);
  }

  /**
   * Set the service
   * @param id
   * @param service
   */
  public set(id: string, service: T) {
    if (service && typeof service !== 'object') {
      throw new ServiceNotEligibleException(
        'The service should be an object and instance of a class',
      );
    }
    this.services.set(id, service);

    return this;
  }
}

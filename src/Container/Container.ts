import { ContainerInterface } from './ContainerInterface';
import { NotFoundExceptionInterface } from './NotFoundExceptionInterface';
import { ServiceNotEligibleException } from '../Exception/ServiceNotEligibleException';

export class Container<T> implements ContainerInterface {
  /** Contains the services */
  private services: Map<string, T>;

  constructor() {
    this.services = new Map<string, T>();
  }

  /**
   * Check if the service exist in the container
   * @param id
   */
  public has(id: string): boolean {
    return this.services.has(id);
  }

  /**
   * Get the service from the provided id
   * @param id
   */
  public get(id: string): any {
    if (!this.has(id)) {
      throw new NotFoundExceptionInterface('Container does not exist');
    }

    return this.services.get(id);
  }

  /**
   * Set the service
   * @param id
   * @param service should be an object / instance of a class
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

import { ContainerInterface } from './ContainerInterface';
import { NotFoundExceptionInterface } from './NotFoundExceptionInterface';

export class Container implements ContainerInterface {
  private instances: Map<string, any>;

  constructor() {
    this.instances = new Map<string, any>();
  }

  public has(id: string): boolean {
    return true;
  }

  public get(id: string): any {
    if (!this.has(id)) {
      throw new NotFoundExceptionInterface('Container does not exist');
    }

    return {};
  }
}

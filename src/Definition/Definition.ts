import { Arguments } from '../Argument/ArgumentInterface';
import { PrototypeException } from './PrototypeException';

interface PostInstanceCall {
  method: string;
  with: Arguments;
}

export interface SettingsDefinitionInterface {
  arguments?: Arguments;
  lazy?: boolean;
  shared?: boolean;
  parent?: string;
  tags?: string[];
  postInstanceCall?: PostInstanceCall;
}

export class Definition<C extends Object> {
  private class: C;
  private arguments: Arguments;
  private lazy: boolean;
  private shared: boolean;
  private tags: string[];
  private postInstanceCall: PostInstanceCall;

  constructor(className: C, settings: SettingsDefinitionInterface = {}) {
    this.$class = className;
    this.$tags = settings.tags || [];
    this.$shared =
      typeof settings.shared === 'boolean' ? settings.shared : true;
    this.$lazy = typeof settings.shared === 'boolean' || false;
    this.$arguments = settings.arguments || [];
    this.$postInstanceCall = settings.postInstanceCall;
  }

  /**
   * Getter $className
   * @return {C}
   */
  public get $class(): C {
    return this.class;
  }

  /**
   * Setter $className
   * @param {C} value
   */
  public set $class(value: C) {
    if (typeof value !== 'object' || typeof value.constructor !== 'function') {
      throw new PrototypeException(
        '`class` should be a prototype object, Did you forget to use `Class.prototype` ?',
      );
    }
    this.class = value;
  }

  /**
   * Getter $lazy
   * @return {boolean}
   */
  public get $lazy(): boolean {
    return this.lazy;
  }

  /**
   * Setter $lazy
   * @param {boolean} value
   */
  public set $lazy(value: boolean) {
    this.lazy = value;
  }

  /**
   * Getter $shared
   * @return {boolean}
   */
  public get $shared(): boolean {
    return this.shared;
  }

  /**
   * Setter $shared
   * @param {boolean} value
   */
  public set $shared(value: boolean) {
    this.shared = value;
  }

  /**
   * Getter $tags
   * @return {string[]}
   */
  public get $tags(): string[] {
    return this.tags;
  }

  /**
   * Setter $tags
   * @param {string[]} value
   */
  public set $tags(value: string[]) {
    this.tags = value;
  }

  /**
   * Getter $arguments
   * @return {Arguments}
   */
  public get $arguments(): Arguments {
    return this.arguments;
  }

  /**
   * Setter $arguments
   * @param {Arguments} value
   */
  public set $arguments(value: Arguments) {
    this.arguments = value;
  }

  /**
   * Getter $arguments
   * @return {Arguments}
   */
  public get $postInstanceCall(): PostInstanceCall {
    return this.postInstanceCall;
  }

  /**
   * Setter $arguments
   * @param {Arguments} value
   */
  public set $postInstanceCall(value: PostInstanceCall) {
    this.postInstanceCall = value;
  }
}

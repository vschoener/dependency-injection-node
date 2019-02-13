import { ArgumentInterface, ArgumentType } from './ArgumentInterface';

export abstract class AbstractArgument<V> implements ArgumentInterface<V> {
  private value: V;
  private type: ArgumentType;

  protected constructor(value: V, type: ArgumentType) {
    this.value = value;
    this.type = type;
  }

  public getValue(): V {
    return this.value;
  }

  public getType(): ArgumentType {
    return this.type;
  }
}

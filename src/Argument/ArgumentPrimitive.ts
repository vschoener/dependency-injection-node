import { AbstractArgument } from './AbstractArgument';
import { ArgumentType } from './ArgumentInterface';

export class ArgumentPrimitive<V = any> extends AbstractArgument<V> {
  constructor(value: V) {
    super(value, ArgumentType.PRIMITIVE);
  }
}

import { AbstractArgument } from './AbstractArgument';
import { ArgumentType } from './ArgumentInterface';

export type Primitive = string | number | object | boolean;

export class ArgumentPrimitive<V = Primitive> extends AbstractArgument<V> {
  constructor(value: V) {
    super(value, ArgumentType.PRIMITIVE);
  }
}

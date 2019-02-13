import { AbstractArgument } from './AbstractArgument';
import { ArgumentType } from './ArgumentInterface';

export class ArgumentService<V = any> extends AbstractArgument<V> {
  constructor(reference: V) {
    super(reference, ArgumentType.SERVICE);
  }
}

import { AbstractArgument } from './AbstractArgument';
import { ArgumentType } from './ArgumentInterface';

export class ArgumentService<V = string> extends AbstractArgument<V> {
  constructor(reference: V) {
    super(reference, ArgumentType.SERVICE);
  }
}

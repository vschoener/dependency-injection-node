import { AbstractArgument } from './AbstractArgument';
import { ArgumentType } from './ArgumentInterface';

/**
 * TODO: This argument location will be handled later once the simple injection
 * will work properly
 */
export class ArgumentConfig<V = string> extends AbstractArgument<V> {
  constructor(keyLocation: V) {
    super(keyLocation, ArgumentType.CONFIG);
  }
}

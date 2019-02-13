export enum ArgumentType {
  CONFIG,
  PRIMITIVE,
  SERVICE,
}

export interface ArgumentInterface<V = any> {
  getType(): ArgumentType;
  getValue(): V;
}

export type Arguments = Array<ArgumentInterface>;

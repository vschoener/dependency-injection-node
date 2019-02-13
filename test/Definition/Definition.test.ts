import { Definition } from '../../src/Definition/Definition';
import { ArgumentPrimitive } from '../../src/Argument/ArgumentPrimitive';
import { ArgumentService } from '../../src/Argument/ArgumentService';
import { ArgumentConfig } from '../../src/Argument/ArgumentConfig';

class MocKClass {
  get() {}
}

describe('Definition', () => {
  it('should register a new service definition with default value', () => {
    const definition = new Definition<MocKClass>(MocKClass.prototype);

    expect({
      class: definition.$class,
      tags: definition.$tags,
      shared: definition.$shared,
      lazy: definition.$lazy,
      arguments: definition.$arguments,
      postInstanceCall: definition.$postInstanceCall,
    }).toEqual({
      class: MocKClass.prototype,
      tags: [],
      shared: true,
      lazy: false,
      arguments: [],
    });
  });

  it('should register a new service definition with custom values', () => {
    const definition = new Definition(MocKClass.prototype, {
      tags: ['service_x', 'service_y'],
      shared: false,
      lazy: true,
      postInstanceCall: {
        method: 'callThis',
        with: [new ArgumentPrimitive(123)],
      },
      arguments: [
        new ArgumentPrimitive(456),
        new ArgumentService('service_here'),
        new ArgumentConfig('key.access.here'),
      ],
    });

    expect({
      class: definition.$class,
      tags: definition.$tags,
      shared: definition.$shared,
      lazy: definition.$lazy,
      arguments: definition.$arguments,
      postInstanceCall: definition.$postInstanceCall,
    }).toEqual({
      class: MocKClass.prototype,
      tags: ['service_x', 'service_y'],
      shared: false,
      lazy: true,
      postInstanceCall: {
        method: 'callThis',
        with: [new ArgumentPrimitive(123)],
      },
      arguments: [
        new ArgumentPrimitive(456),
        new ArgumentService('service_here'),
        new ArgumentConfig('key.access.here'),
      ],
    });
  });

  it('should register a new service definition and throw if class is wrong', () => {
    let error;
    try {
      const definition = new Definition(MocKClass, {
        tags: ['service_x', 'service_y'],
        shared: false,
        lazy: true,
        postInstanceCall: {
          method: 'callThis',
          with: [new ArgumentPrimitive(123)],
        },
        arguments: [
          new ArgumentPrimitive(456),
          new ArgumentService('service_here'),
          new ArgumentConfig('key.access.here'),
        ],
      });
    } catch (err) {
      error = err;
    }

    console.log(error);
    expect(error.name).toEqual('PrototypeException');
  });
});

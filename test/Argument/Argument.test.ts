import { ArgumentPrimitive } from '../../src/Argument/ArgumentPrimitive';
import { ArgumentService } from '../../src/Argument/ArgumentService';
import { ArgumentConfig } from '../../src/Argument/ArgumentConfig';
import { ArgumentType } from '../../src/Argument/ArgumentInterface';

describe('Argument', () => {
  describe('ArgumentPrimitive', () => {
    it('should create a primitive argument', () => {
      const argument = new ArgumentPrimitive(123);

      expect({
        value: argument.getValue(),
        type: argument.getType(),
      }).toEqual({
        value: 123,
        type: ArgumentType.PRIMITIVE,
      });
    });

    it('should create a primitive argument', () => {
      const argument = new ArgumentPrimitive('string');

      expect({
        value: argument.getValue(),
        type: argument.getType(),
      }).toEqual({
        value: 'string',
        type: ArgumentType.PRIMITIVE,
      });
    });
  });

  describe('ArgumentService', () => {
    it('should create a service argument', () => {
      const argument = new ArgumentService('serviceName');

      expect({
        value: argument.getValue(),
        type: argument.getType(),
      }).toEqual({
        value: 'serviceName',
        type: ArgumentType.SERVICE,
      });
    });
  });

  describe('ArgumentConfig', () => {
    it('should create a config argument', () => {
      const argument = new ArgumentConfig('keyLocation');

      expect({
        value: argument.getValue(),
        type: argument.getType(),
      }).toEqual({
        value: 'keyLocation',
        type: ArgumentType.CONFIG,
      });
    });
  });
});

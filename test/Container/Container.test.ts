import { Container } from '../../src/Container/Container';
import { NotFoundExceptionInterface } from '../../src/Container/NotFoundExceptionInterface';
// import { NotFoundExceptionInterface } from '../../src/container/NotFoundExceptionInterface';
import { ServiceNotEligibleException } from '../../src/Exception/ServiceNotEligibleException';

describe('Container', () => {
  it("should return true if it doesn't have the container", () => {
    const container = new Container();

    expect(container.has('service')).toBeFalsy();
  });

  it('should set and has the container', () => {
    const object = {
      yes: () => true,
    };

    const container = new Container();
    container.set('my_object', object);

    expect(container.has('my_object')).toBeTruthy();
  });

  it("should set and throw an error if it doesn't apply", () => {
    const object = 'wonderfulObject';

    const container = new Container();
    expect(() => container.set('my_object', object)).toThrow(ServiceNotEligibleException);
  });

  it('should return the container', () => {
    const object = {
      yes: () => true,
    };

    const container = new Container();
    container.set('my_object', object);

    expect(container.get('my_object')).toEqual(object);
  });

  it('should throw an exception if the container does not exist', () => {
    const container = new Container();

    expect(() => container.get('something')).toThrowError(NotFoundExceptionInterface);
  });
});

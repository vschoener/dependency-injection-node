import { Container } from '../../src/Container/Container';
//import { NotFoundExceptionInterface } from '../../src/container/NotFoundExceptionInterface';

describe('Container', () => {
  it('should return true if it has the container', () => {
    const container = new Container();

    expect(container.has('containeer')).toEqual(true);
  });

  it('should throw an exception if the container does not exist', () => {
    const container = new Container();

    expect(container.get('something')).toEqual({});
  });
});

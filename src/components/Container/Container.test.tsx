import { cleanup, screen } from '@testing-library/react';

import renderComponent from '../../utils/testing/renderComponent';

import Container from './Container';

afterEach(cleanup);

describe('<Container>', () => {
  it('Should render container component with id "test"', () => {
    renderComponent(<Container id="test">Test</Container>);
    const containerElement = screen.getByTestId('ContainerTest-1');
    expect(containerElement).toBeInTheDocument();
  });

  it('Should render container component without any id', () => {
    renderComponent(<Container>Test</Container>);
    const containerElement = screen.getByTestId('ContainerTest-1');
    expect(containerElement).toBeInTheDocument();
  });
});

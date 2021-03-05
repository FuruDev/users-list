import { cleanup, fireEvent, screen } from '@testing-library/react';

import renderComponent from '../../utils/testing/renderComponent';

import SearchBar from './SearchBar';

afterEach(cleanup);

describe('<SearchBar />', () => {
  it('Should has foo value', () => {
    const onChange = jest.fn();

    renderComponent(<SearchBar onChange={onChange} />);

    const searchBarElement = screen.getByTestId('SearchBar-1');

    fireEvent.change(searchBarElement, {
      target: { value: 'foo' }
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(searchBarElement).toHaveValue('foo');
  });
});

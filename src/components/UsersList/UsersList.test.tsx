import { cleanup, screen } from '@testing-library/react';

import renderComponent from '../../utils/testing/renderComponent';

import UsersList from './UsersList';

afterEach(cleanup);

describe('<UsersList users={users} />', () => {
  it('Should render users list with one record', () => {
    const data = [{ id: 1, name: 'Apple Banana', username: 'AppleBanana' }];
    renderComponent(<UsersList users={data} />);
    const usersListElement = screen.getByTestId('UsersList-1');
    expect(usersListElement).toBeInTheDocument();
    expect(usersListElement).toHaveTextContent('Apple Banana');
  });
});

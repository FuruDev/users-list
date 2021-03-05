import React, { FC } from 'react';

import User from '../../utils/User';

import { StyledUsersList, StyledUsersListItem, StyledUsername } from './UsersList.styles';

type UsersListProps = {
  users: Array<User>;
};

const UsersList: FC<UsersListProps> = ({ users }) => (
  <StyledUsersList data-testid="UsersList-1">
    {users.map(({ id, name, username }) => (
      <StyledUsersListItem key={id}>
        {name} <StyledUsername>{username}</StyledUsername>
      </StyledUsersListItem>
    ))}
  </StyledUsersList>
);

export default UsersList;

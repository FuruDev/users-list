import styled from 'styled-components';

export const StyledUsersList = styled.ol`
  counter-reset: usersList;
  margin-top: 40px;
`;

export const StyledUsersListItem = styled.li`
  counter-increment: usersList;
  width: 100%;
  font-size: 18px;
  margin-bottom: 24px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &::before {
    content: counters(usersList, '.') '. ';
    display: inline-block;
    width: 40px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const StyledUsername = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  margin-left: 20px;

  &::before {
    content: '@';
  }
`;

import styled from 'styled-components';

export const StyledSearchBar = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.text};
  width: 100%;
  padding: 8px 4px;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`;

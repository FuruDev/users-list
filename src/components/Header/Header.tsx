import React, { FC } from 'react';

import { StyledHeader, StyledHeading } from './Header.styles';

import { title } from './Header.data';

const Header: FC = () => (
  <StyledHeader>
    <StyledHeading>{title}</StyledHeading>
  </StyledHeader>
);

export default Header;

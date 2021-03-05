import React, { FC, ReactNode } from 'react';

import { StyledContainer } from './Container.styles';

type ContainerProps = {
  id?: string;
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ id, children }) => (
  <StyledContainer data-testid="ContainerTest-1" id={id}>
    {children}
  </StyledContainer>
);

export default Container;

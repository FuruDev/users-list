import styled from 'styled-components';

export const StyledContainer = styled.section`
  max-width: ${({ theme }) => theme.sizes.containerWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.sizes.containerPadding};
`;

import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '../../theme/theme';

const renderComponent = (children: ReactNode): ReactNode =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export default renderComponent;

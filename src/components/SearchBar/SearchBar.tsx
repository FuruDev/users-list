import React, { FC, ChangeEvent } from 'react';

import { StyledSearchBar } from './SearchBar.styles';

import { placeholderText } from './SearchBar.data';

type SearchBarProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: FC<SearchBarProps> = ({ onChange }) => {
  return <StyledSearchBar data-testid="SearchBar-1" placeholder={placeholderText} onChange={onChange} />;
};

export default SearchBar;

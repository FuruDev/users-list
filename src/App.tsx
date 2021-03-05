import React, { useContext, useState, ChangeEvent } from 'react';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import UsersList from './components/UsersList/UsersList';

import { UsersContext } from './context/UsersContext';
import User from './utils/User';

function App(): JSX.Element {
  const { users } = useContext(UsersContext);
  const [searchValue, setSearchValue] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<Array<User>>([]);

  const filterUsers = () => users.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()));

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
    setFilteredUsers(filterUsers());
  };

  return (
    <Container id="main">
      <Header />
      <SearchBar onChange={onChangeHandler} />
      <UsersList users={searchValue ? filteredUsers : users} />
    </Container>
  );
}

export default App;

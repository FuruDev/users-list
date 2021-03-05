import React, { createContext, FC, useState, useEffect } from 'react';

import User from '../utils/User';

export type UsersContextData = {
  users: Array<User>;
  setUsers: (users: UsersContextData['users']) => void;
};

export const usersContextDefaultValue: UsersContextData = {
  users: [],
  setUsers: () => {}
};

export const UsersContext = createContext<UsersContextData>(usersContextDefaultValue);

const UsersProvider: FC = ({ children }) => {
  const URL = 'https://jsonplaceholder.typicode.com/users?_limit=3';
  const [users, setUsers] = useState<UsersContextData['users']>([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch(URL);
      const usersData = await res.json();
      const filteredData = usersData.map(({ id, name, username }: User) => {
        return {
          id,
          name,
          username
        };
      });
      setUsers(filteredData);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [URL]);

  return <UsersContext.Provider value={{ users, setUsers }}>{children}</UsersContext.Provider>;
};

export default UsersProvider;

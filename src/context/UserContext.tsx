import {
  createContext,
  Dispatch,
  ReactNode,
  useState,
  SetStateAction,
  useContext,
} from 'react';

import {User} from '@interfaces';

type UserContextType = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

const UserContext = createContext<UserContextType>({
  user: {location: undefined, address: undefined},
  setUser: () => {},
});

const UserContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<User>({
    location: undefined,
    address: undefined,
  });

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
export const useUserContext = () => useContext(UserContext);

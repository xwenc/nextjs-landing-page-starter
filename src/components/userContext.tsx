import { createContext } from 'react';

const initialState: {
  scrollRef: any;
} = {
  scrollRef: null,
}

const UserContext = createContext(initialState);

export default UserContext;

import { createContext, useContext } from 'react';
import counter from './counter';
import user from './user';

const store = {
  counter,
  user
};

const StoreContext = createContext(store);

function useStores() {
  return useContext(StoreContext);
}

export default useStores;

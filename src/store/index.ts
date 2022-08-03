import { createContext } from 'react';
import counter from './counter';

const store = {
  counter
};

const StoreContext = createContext(store);

function useStores() {
  return useContext(StoreContext);
}

export default useStores;

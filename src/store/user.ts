import { clearStorage, getToken } from '@/utils/storage';
import { makePersistable } from 'mobx-persist-store';

class User {
  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'userStore',
      properties: [],
      storage: window.localStorage
    });
  }

  token = getToken();

  get isLogin() {
    return !!this.token;
  }

  logout = () => {
    this.token = null;
    clearStorage();
    history.pushState(undefined, '', '/login');
  };
}

const user = new User();

export default user;

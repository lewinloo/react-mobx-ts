import { makeAutoObservable } from 'mobx';

class Counter {
  constructor() {
    makeAutoObservable(this);
  }

  count = 0;

  add = () => {
    this.count = this.count + 1;
  };
}

const counter = new Counter();

export default counter;

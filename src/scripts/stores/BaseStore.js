import AppDispatcher from '../dispatcher/AppDispatcher.js'
import { EventEmitter } from 'events';
const CHANGE_EVENT = 'CHANGE';

class Store extends EventEmitter {
  constructor(){
    this.dispatcherIndex = AppDispatcher.register(this.handleAction.bind(this));
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

export default Store;

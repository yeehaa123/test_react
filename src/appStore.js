import { Map, Stack }  from 'immutable';
import Reflux from 'reflux';

let assign = (target, source) => {
  Object.keys(source).forEach(function(key){
    target[key] = source[key];
  });
}

let AppStore = Reflux.createStore({
  history: Stack([Map({value: 1})]),
  init(){
    setInterval(()=>{
      this.updateHistory();
      this.trigger(this.getState());
    }, 1000)
  },
  updateHistory(){
    let oldState = this.history.first();
    let newState = oldState.update('value', (value) => value + 1);
    this.history = this.history.push(newState);
  },
  getHistory(){
    return this.history;
  },
  getState(){
    return this.history.first();
  }
});

export default AppStore;

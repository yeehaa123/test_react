import { Map, Stack }  from 'immutable';
import Reflux from 'reflux';

let assign = (target, source) => {
  Object.keys(source).forEach(function(key){
    target[key] = source[key];
  });
}

let actions = Reflux.createActions([
  "authenticate",
  "revertHistory",
  "forwardHistory"
]);

let History = Stack([])

let Future =  Stack([]);

let initialState = Map({
  user: 'anonymous'
});


History = History.push(initialState);

let HistoryStore = Reflux.createStore({

  init(){
    this.listenTo(actions.revertHistory, this.revertHistory)
    this.listenTo(actions.forwardHistory, this.forwardHistory)
  },

  revertHistory(){
    if(History.size > 1){
      let lastState = History.first();
      Future = Future.push(lastState);
      History = History.shift();
      let oldState = History.first();
      this.trigger(oldState);
    }
  },

  forwardHistory(){
    if(Future.size){
      let lastState = Future.first();
      History = History.push(lastState);
      Future = Future.shift();
      let oldState = History.first();
      this.trigger(oldState);
    }
  },

  getHistory(){
    return History;
  },

  getState(){
    return History.first();
  }
});

let AppStore = Reflux.createStore({

  init(){
    this.listenTo(actions.authenticate, this.authenticate)
  },

  authenticate(){
    let oldState = History.first();
    let newState = oldState.update('user', () => 'yeehaa');
    History = History.push(newState);
    this.trigger(newState);
  }
});

export { actions, HistoryStore, AppStore };

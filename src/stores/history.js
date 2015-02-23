import Reflux from 'reflux';
import Actions from '../actions/index.js';
import AppState from './appState.js';
import { Stack }  from 'immutable';

let History = Stack([])
let Future =  Stack([]);
let HistoryStore = Reflux.createStore({

  init(){
    this.listenTo(AppState, this.logStateChange);
    this.listenTo(Actions.revertHistory, this.revertHistory)
    this.listenTo(Actions.forwardHistory, this.forwardHistory)
  },

  logStateChange(state){
    if(!state.get('timestamp')){
      let newState = state.update('timestamp', () => Date.now );
      Future = Stack([]);
      History = History.push(newState);
    }
  },

  revertHistory(){
    if(History.size > 1){
      let lastState = History.first();
      Future = Future.push(lastState);
      History = History.shift();
      AppState.set(History.first());
    }
  },

  forwardHistory(){
    if(Future.size){
      let lastState = Future.first();
      History = History.push(lastState);
      Future = Future.shift();
      AppState.set(History.first());
    }
  },

  getHistory(){
    return History;
  },

  getState(){
    return History.first();
  }
});

export default HistoryStore;

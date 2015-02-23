import { Map }  from 'immutable';
import Actions from '../actions/index.js';
import Reflux from 'reflux';

let CurrentState;

let initialState = Map({
  user: undefined,
  mode: 'browse'
});

let AppState = Reflux.createStore({

  init(){
    this.listenTo(Actions.authenticate, this.authenticate)
    this.listenTo(Actions.learn, this.learn)
    this.listenTo(Actions.ready, this.ready)
  },

  ready(){
    this.set(initialState);
  },

  learn(){
    let props = {
      timestamp: undefined,
      mode: 'learn'
    };
    let state = CurrentState.merge(props);
    this.set(state);
  },

  authenticate(){
    let props = {
      timestamp: undefined,
      user: 'yeehaa'
    };
    let state = CurrentState.merge(props);
    this.set(state);
  },

  set(state){
    CurrentState = state;
    this.trigger(CurrentState);
  }

});

export default AppState;

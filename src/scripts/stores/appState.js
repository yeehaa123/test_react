import BaseStore from './BaseStore';
import { Map, Stack }  from 'immutable';
import Actions from '../actions/index.js';
import AppStateConstants from '../constants/AppStateConstants'

let _CurrentState = Map({
  timestamp: Date.now(),
  user: undefined,
  mode: 'browse'
});

let _History = Stack([_CurrentState])
let _Future =  Stack([]);

class AppState extends BaseStore {

  get current() {
    return _CurrentState.toJS();
  }

  learn(){
    this.update({ mode: 'learn'});
  }

  authenticate(){
    this.update({ user: 'yeehaa' })
  }

  update(props){
    props.timestamp = Date.now();
    _History = _History.push(_CurrentState.merge(props));
    _Future = Stack([]);
    this.set();
  }

  set(){
    _CurrentState = _History.first();
    this.emitChange();
  }

  revert(){
    if(_History.size > 1){
      let lastState = _History.first();
      _Future = _Future.push(lastState);
      _History = _History.shift();
      this.set();
    }
  }

  forward(){
    if(_Future.size > 0){
      let lastState = _Future.first();
      _History = _History.push(lastState);
      _Future = _Future.shift();
      this.set();
    }
  }

  switchMode(mode){
    this.update({ mode: mode });
  }

  handleAction(action){
    switch(action.actionType) {
      case AppStateConstants.LEARN:
        this.learn();
        break;
      case AppStateConstants.SWITCH_MODE:
        this.switchMode(action.mode);
        break;
      case AppStateConstants.AUTHENTICATE:
        this.authenticate();
        break;
      case AppStateConstants.REVERT:
        this.revert();
        break;
      case AppStateConstants.FORWARD:
        this.forward();
        break;
    }
    return true;
  }
}

export default new AppState();

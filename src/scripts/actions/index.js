import AppDispatcher from '../dispatcher/AppDispatcher';
import AppStateConstants from '../constants/AppStateConstants'


let Actions = {
  authenticate(){
    AppDispatcher.dispatch({
      actionType: AppStateConstants.AUTHENTICATE
    });
  },
  switchMode(mode){
    AppDispatcher.dispatch({
      actionType: AppStateConstants.SWITCH_MODE,
      mode: mode
    });
  },
  revert(){
    AppDispatcher.dispatch({
      actionType: AppStateConstants.REVERT_HISTORY
    });
  },
  forward(){
    AppDispatcher.dispatch({
      actionType: AppStateConstants.FORWARD_HISTORY
    });
  }
};

export default Actions;

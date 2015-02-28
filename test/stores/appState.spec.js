import AppStateConstants from '../../src/scripts/constants/AppStateConstants';
import AppDispatcher from '../../src/scripts/dispatcher/AppDispatcher';
import AppStateStore from '../../src/scripts/stores/appState';

describe('AppState', () => {
  let AppState;
  let callback;

  let actionAuthenticate = {
    actionType: AppStateConstants.AUTHENTICATE
  };

  let actionSwitchMode = {
    actionType: AppStateConstants.SWITCH_MODE,
    mode: 'learn'
  };

  let actionRevertHistory = {
    actionType: AppStateConstants.REVERT_HISTORY
  };

  let actionForwardHistory = {
    actionType: AppStateConstants.FORWARD_HISTORY
  };


  beforeEach(() => {
    AppDispatcher.register = sinon.stub();
    AppState = new AppStateStore();
    callback = AppDispatcher.register.firstCall.args[0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(AppDispatcher.register).calledOnce;
  });

  it('sets up the initial state', () => {
    let state = AppState.current;
    expect(state).to.include.keys('user', 'mode', 'timestamp');
    expect(state.isLatest).to.be.true;
    expect(state.isEarliest).to.be.true;
  });

  it('authenticates the user', () => {
    callback(actionAuthenticate);
    let state = AppState.current;
    expect(state.user).to.equal('yeehaa');
    expect(state.isLatest).to.be.true;
    expect(state.isEarliest).to.be.false;
  });

  it('switches between modes', () => {
    callback(actionSwitchMode);
    let state = AppState.current;
    expect(state.mode).to.equal('learn');
    expect(state.isLatest).to.be.true;
    expect(state.isEarliest).to.be.false;
  });

  describe('travel back in time', () => {
    beforeEach(() => {
      callback(actionSwitchMode);
    });

    it('succeeds', () => {
      callback(actionRevertHistory);
      let state = AppState.current;
      expect(state.isLatest).to.be.false;
      expect(state.isEarliest).to.be.true;
    });
  });

  describe('travel to the future', () => {
    beforeEach(() => {
      callback(actionSwitchMode);
      callback(actionRevertHistory);
    });

    it('succeeds', () => {
      callback(actionForwardHistory);
      let state = AppState.current;
      expect(state.isLatest).to.be.true;
      expect(state.isEarliest).to.be.false;
    });
  });
})

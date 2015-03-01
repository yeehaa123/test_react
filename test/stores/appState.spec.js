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
    let { isLatest, isEarliest } = state.details;
    expect(state).to.include.keys('user', 'mode', 'timestamp');
    expect(isLatest).to.be.true;
    expect(isEarliest).to.be.true;
  });

  it('authenticates the user', () => {
    callback(actionAuthenticate);
    let { user, details } = AppState.current;
    let { isLatest, isEarliest } = details;
    expect(user).to.equal('yeehaa');
    expect(isLatest).to.be.true;
    expect(isEarliest).to.be.false;
  });

  it('switches between modes', () => {
    callback(actionSwitchMode);
    let { mode, details } = AppState.current;
    let { isLatest, isEarliest } = details;
    expect(mode).to.equal('learn');
    expect(isLatest).to.be.true;
    expect(isEarliest).to.be.false;
  });

  describe('travel back in time', () => {
    beforeEach(() => {
      callback(actionSwitchMode);
    });

    it('succeeds', () => {
      callback(actionRevertHistory);
      let { isLatest, isEarliest } = AppState.current.details;
      expect(isLatest).to.be.false;
      expect(isEarliest).to.be.true;
    });
  });

  describe('travel to the future', () => {
    beforeEach(() => {
      callback(actionSwitchMode);
      callback(actionRevertHistory);
    });

    it('succeeds', () => {
      callback(actionForwardHistory);
      let { isLatest, isEarliest } = AppState.current.details;
      expect(isLatest).to.be.true;
      expect(isEarliest).to.be.false;
    });
  });
});

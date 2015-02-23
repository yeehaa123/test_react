import React from 'react';
import Actions from '../actions/index';
import { HistoryStore, AppStore } from '../stores/index';
import ModeButtons from './modeButtons.jsx'

let ControlPanel = React.createClass({

  revertHistory(){
    Actions.revertHistory();
  },

  forwardHistory(){
    Actions.forwardHistory();
  },

  render() {
    return (
      <section className="controlPanel">
        <div className="historyButtons">
          <button onClick={ this.revertHistory }>Revert History</button>
          <button onClick={ this.forwardHistory }>Forward History</button>
        </div>
        <ModeButtons user={ this.props.user } mode={ this.props.mode }/>
      </section>
    )
  }
});

export default ControlPanel;

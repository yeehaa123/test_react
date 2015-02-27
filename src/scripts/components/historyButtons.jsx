import React from 'react';
import Actions from '../actions/index';

let HistoryButtons = React.createClass({

  revertHistory(){
    Actions.revert();
  },

  forwardHistory(){
    Actions.forward();
  },

  render() {
    return (
      <div className="historyButtons">
        <button onClick={ this.revertHistory }>Revert History</button>
        <button onClick={ this.forwardHistory }>Forward History</button>
      </div>
    )
  }
});

export default HistoryButtons;

import React from 'react';
import Actions from '../actions/index';
import ModeButtons from './modeButtons.jsx'

let ControlPanel = React.createClass({

  revertHistory(){
    Actions.revert();
  },

  forwardHistory(){
    Actions.forward();
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

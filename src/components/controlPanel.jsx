import React from 'react';
import Actions from '../actions/index';
import { HistoryStore, AppStore } from '../stores/index';

let ControlPanel = React.createClass({

  authenticate(){
    Actions.authenticate();
  },

  learn(){
    Actions.learn();
  },

  revertHistory(){
    Actions.revertHistory();
  },

  forwardHistory(){
    Actions.forwardHistory();
  },

  render() {
    let buttonMode =  {
      action: !this.props.user ? this.authenticate : this.learn,
      text: !this.props.user ? 'Sign In' : 'Learn'
    };
    return (
      <section className="controlPanel">
        <div>
          <button onClick={ this.revertHistory }>Revert History</button>
          <button onClick={ this.forwardHistory }>Forward History</button>
        </div>
        <div>
          <button onClick={ buttonMode.action }>{ buttonMode.text }</button>
        </div>
      </section>
    )
  }
});

export default ControlPanel;

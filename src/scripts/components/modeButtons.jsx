import React from 'react';
import Actions from '../actions/index';
import ModeButton from './modeButton.jsx';

let ModeButtons = React.createClass({

  authenticate(){
    Actions.authenticate();
  },

  render(){

    let modes = [
      'browse',
      'learn',
      'curate'
    ];

    if(! this.props.user){
      return (
        <section className="authenticate">
          <button onClick={ this.authenticate }>Sign In</button>
        </section>
      )
    } else {
      return (
        <section className="modeButtons">
          { modes.map((mode, index) => <ModeButton key={index} mode={mode} currentMode={this.props.mode}/>) }
        </section>
      )
    }
  }
});

export default ModeButtons;

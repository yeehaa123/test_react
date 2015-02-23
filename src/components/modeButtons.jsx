import React from 'react';
import Actions from '../actions/index';

let ModeButtons = React.createClass({

  authenticate(){
    Actions.authenticate();
  },

  learn(){
    Actions.learn();
  },

  render(){
    if(! this.props.user){
      return (
        <section className="authenticate">
          <button onClick={ this.authenticate }>Sign In</button>
        </section>
      )
    } else {
      return (
        <section className="modeButtons">
          <button className={ this.props.mode === 'browse' ? 'active' : null} onClick={ this.learn }>Browse</button>
          <button className={ this.props.mode === 'learn' ? 'active' : null} onClick={ this.learn }>Learn</button>
          <button className={ this.props.mode === 'curate' ? 'active' : null} onClick={ this.learn }>Active</button>
        </section>
      )
    }
  }
});

export default ModeButtons;

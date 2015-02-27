import React from 'react';
import Actions from '../actions/index';
import ModeButtons from './modeButtons.jsx'

let Authenticate = React.createClass({

  authenticate(){
    Actions.authenticate();
  },

  render() {
    return (
      <section className="authenticate">
        <button onClick={ this.authenticate }>Sign In</button>
      </section>
    )
  }
});

export default Authenticate;

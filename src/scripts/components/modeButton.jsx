import React from 'react';
import Actions from '../actions/index';

let ModeButton = React.createClass({

  switchMode(mode){
    Actions.switchMode(mode);
  },

  render(){
    let mode = this.props.mode;
    let currentMode = this.props.currentMode;
    let buttonTitle = this.props.mode.toUpperCase();

    return (
      <button className={ currentMode === mode ? 'active' : null}
        onClick={ this.switchMode.bind(this, mode) }>{ buttonTitle }
      </button>
    )
  }
});

export default ModeButton;

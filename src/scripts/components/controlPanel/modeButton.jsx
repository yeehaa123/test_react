import React from 'react';
import Actions from '../../actions/index';

class ModeButton extends React.Component {

  switchMode(mode){
    Actions.switchMode(mode);
  }

  render(){
    let mode = this.props.mode;
    let currentMode = this.props.currentMode;
    let buttonTitle = this.props.mode.toUpperCase();
    let classes = currentMode === mode  ? 'active' : null;

    return (
      <button className={ classes } onClick={ this.switchMode.bind(this, mode) }>
        { buttonTitle }
      </button>
    )
  }
};

ModeButton.propTypes = {
  mode: React.PropTypes.string,
  currentMode: React.PropTypes.string
};

export default ModeButton;

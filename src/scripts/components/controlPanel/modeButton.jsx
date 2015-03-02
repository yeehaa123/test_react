import React from 'react';
import Actions from '../../actions/index';
import _ from 'lodash';

class ModeButton extends React.Component {

  switchMode(mode){
    Actions.switchMode(mode);
  }

  render(){
    let mode = this.props.mode;
    let currentMode = this.props.currentMode;
    let buttonTitle = _.capitalize(this.props.mode);
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

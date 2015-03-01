import React from 'react';
import ModeButton from './modeButton.jsx';

class ModeButtons extends React.Component {

  render(){
    let modes = this.props.modes;
    let currentMode = this.props.mode;
    let modeButtons = modes.map((mode, index) => {
      return <ModeButton key={ index } mode={ mode } currentMode={ currentMode }/>;
    });

    return (
      <section className="modeButtons">{ modeButtons }</section>
    );
  }
};

ModeButtons.defaultProps = {
  modes: ['browse','learn','curate']
};

ModeButtons.propTypes = {
  modes: React.PropTypes.array,
  mode: React.PropTypes.string
};

export default ModeButtons;

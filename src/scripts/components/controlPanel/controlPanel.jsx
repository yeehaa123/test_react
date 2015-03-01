import React from 'react';
import HistoryButtons from './historyButtons.jsx';
import AuthenticateButton from './authenticate.jsx';
import ModeButtons from './modeButtons.jsx';

class ControlPanel extends React.Component {

  render() {
    let { user, mode, details } = this.props;
    return (
      <section className="controlPanel">
        <HistoryButtons isEarliest={ details.isEarliest } isLatest={ details.isLatest }/>
        { user ? <ModeButtons mode={ mode }/> : <AuthenticateButton /> }
      </section>
    )
  }
};

ControlPanel.PropTypes = {
  user: React.PropTypes.string,
  mode: React.PropTypes.string
}

export default ControlPanel;

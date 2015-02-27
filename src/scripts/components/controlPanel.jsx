import React from 'react';
import Actions from '../actions/index';
import { AppState } from '../stores/index';

import HistoryButtons from './historyButtons.jsx';
import AuthenticateButton from './authenticate.jsx';
import ModeButtons from './modeButtons.jsx';

class ControlPanel extends React.Component {

  constructor(props){
    super(props);
    this._onChange = this._onChange.bind(this);
    let { user } = AppState.current;
    this.state = { user };
  }

  componentDidMount() {
    AppState.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppState.removeChangeListener(this._onChange);
  }

  _onChange(){
    let { user } = AppState.current;
    this.setState({ user });
  }

  render() {
    return (
      <section className="controlPanel">
        <HistoryButtons />
        { this.state.user ? <ModeButtons /> : <AuthenticateButton /> }
      </section>
    )
  }
};

export default ControlPanel;

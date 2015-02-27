import React from 'react';
import Actions from '../actions/index';
import { AppState } from '../stores/index';
import ModeButton from './modeButton.jsx';

class ModeButtons extends React.Component {

  constructor(props){
    this._onChange = this._onChange.bind(this);
    super(props);
    let { mode } = AppState.current;
    this.state = { mode };
  }

  componentDidMount() {
    AppState.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppState.removeChangeListener(this._onChange);
  }

  _onChange(){
    let { mode } = AppState.current;
    this.setState({ mode });
  }

  render(){
    let modes = ['browse','learn','curate'];
    return (
      <section className="modeButtons">
        { modes.map((mode, index) => <ModeButton key={index} mode={mode} currentMode={this.state.mode}/>) }
      </section>
    )
  }
};

export default ModeButtons;

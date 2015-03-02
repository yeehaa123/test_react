import React from 'react';
import { AppState } from '../../stores/index';
import ControlPanel from './controlPanel.jsx';

class ControlPanelContainer extends React.Component {

  constructor(props){
    super(props);
    let { user, mode, history } = AppState.current;
    this.state = { user, mode, history };
    this.onChange = this.onChange.bind(this);
  }

  onChange(){
    let state = AppState.current;
    let { user, mode, history } = state;
    this.setState({ user, mode, history });
  }

  componentDidMount() {
    AppState.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    AppState.removeChangeListener(this.onChange);
  }

  render() {
    let { user, mode, history } = this.state;
    return <ControlPanel user={ user } mode= { mode } history={ history }/>;
  }
};

export default ControlPanelContainer;

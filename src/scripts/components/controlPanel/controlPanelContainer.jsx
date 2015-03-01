import React from 'react';
import { AppState } from '../../stores/index';
import ControlPanel from './controlPanel.jsx';

class ControlPanelContainer extends React.Component {

  constructor(props){
    super(props);
    let { user, mode, details } = AppState.current;
    this.state = { user, mode, details };
    this.onChange = this.onChange.bind(this);
  }

  onChange(){
    let state = AppState.current;
    let { user, mode, details } = state;
    this.setState({ user, mode, details });
  }

  componentDidMount() {
    AppState.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    AppState.removeChangeListener(this.onChange);
  }

  render() {
    let { user, mode, details } = this.state;
    return <ControlPanel user={ user } mode= { mode } details={ details }/>;
  }
};

export default ControlPanelContainer;

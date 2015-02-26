import React from 'react';
import DebugState from './debugState.jsx';
import { History, AppState } from '../stores/index';
import ControlPanel from './controlPanel.jsx'

let Sidebar = React.createClass({

  getInitialState(){
    return AppState.current;
  },

  componentDidMount() {
    AppState.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    AppState.removeChangeListener(this._onChange);
  },

  _onChange(){
    let state = AppState.current;
    return this.replaceState(state);
  },

  render() {
    return (
      <div className="sidebar">
        <div>
          <h1>_Unacademic</h1>
          <p> Learn By Dwelling</p>
        </div>
        <DebugState object={this.state}/>
        <ControlPanel mode={ this.state.mode } user={this.state.user} />
      </div>
    )
  }
});

export default Sidebar;

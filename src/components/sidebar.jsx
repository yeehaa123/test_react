import React from 'react';
import DebugState from './debugState.jsx';
import { HistoryStore, AppStore } from '../stores/index';
import ControlPanel from './controlPanel.jsx'

let Sidebar = React.createClass({

  getInitialState(){
    return {
      user: undefined
    }
  },

  componentDidMount() {
    this.unsubscribeAppStore = AppStore.listen(this.onChange);
  },
  componentWillUnmount() {
    this.unsubscribeAppStore();
  },

  onChange(appState){
    let state = this.updateState(appState);
    return this.replaceState(state);
  },

  updateState(state){
    let user = state.get('user');
    let mode = state.get('mode');
    return { user, mode };
  },

  render() {
    return (
      <div className="sidebar">
        <div>
          <h1>_Unacademic !!</h1>
          <h2> Learn By Dwelling</h2>
        </div>
        <DebugState object={this.state}/>
        <ControlPanel user={this.state.user} />
      </div>
    )
  }
});

export default Sidebar;

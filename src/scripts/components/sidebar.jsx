import '../../styles/sidebar.css';

import React from 'react';
import DebugState from './debugState.jsx';
import ControlPanel from './controlPanel.jsx'

class Sidebar extends React.Component {

  render() {
    return (
      <div className="sidebar">
        <div>
          <h1>_Unacademic</h1>
          <p> Learn By Dwelling</p>
        </div>
        <DebugState />
        <ControlPanel />
      </div>
    )
  }
};

export default Sidebar;

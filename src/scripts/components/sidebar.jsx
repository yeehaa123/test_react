import '../../styles/sidebar.css';

import React from 'react';
import DebugStateContainer from './debugState/debugStateContainer.jsx';
import ControlPanelContainer from './controlPanel/controlPanelContainer.jsx'

class Sidebar extends React.Component {

  shouldComponentUpdate(){
    return false;
  }

  render() {
    return (
      <div className="sidebar">
        <section className="contentPanel">
          <h1>_Unacademic</h1>
          <p> Learn By Dwelling</p>
        </section>
        <DebugStateContainer />
        <ControlPanelContainer />
      </div>
    )
  }
};

export default Sidebar;

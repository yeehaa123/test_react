import '../../styles/sidebar.css';

import React from 'react';
import DebugStateContainer from './debugState/debugStateContainer.jsx';
import ControlPanel from './controlPanel/controlPanel.jsx'

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
        <ControlPanel appState={ this.props.appState }/>
      </div>
    )
  }
};

Sidebar.propTypes = {
  appState: React.PropTypes.object.isRequired
} 

export default Sidebar;

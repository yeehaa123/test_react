import 'normalize.css/normalize.css';
import css from '../../styles/app.css';

import React from 'react';
import Sidebar from './sidebar.jsx';
import Main from './main.jsx';

class Unacademic extends React.Component{

  render() {
    let { model, appState } = this.props;
    return (
      <section className="app">
        <Sidebar appState={ appState }/>
        <Main model={ model }/>
      </section>
    )
  }
};

Unacademic.propTypes = {
  model: React.PropTypes.object.isRequired,
  appState: React.PropTypes.object.isRequired
}

export default Unacademic;

import 'normalize.css/normalize.css';
import css from '../../styles/app.css';

import React from 'react';
import Sidebar from './sidebar.jsx';
import Main from './main.jsx';

class Unacademic extends React.Component{

  render() {
    let { model } = this.props;
    return (
      <section className="app">
        <Sidebar />
        <Main model={ model }/>
      </section>
    )
  }
};

Unacademic.propTypes = {
  model: React.PropTypes.object,
  user: React.PropTypes.string,
  mode: React.PropTypes.oneOf(['browse', 'learn', 'curate']).isRequired
}

export default Unacademic;

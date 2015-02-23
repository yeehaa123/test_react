import React from 'react';
import Actions from '../actions/index';

import Sidebar from './sidebar.jsx';
import Main from './main.jsx';
import 'normalize.css/normalize.css';
import css from '../styles/app.css';

let Unacademic = React.createClass({

  componentDidMount() {
    Actions.ready();
  },

  render() {
    return (
      <section className="app">
        <Sidebar />
        <Main />
      </section>
    )
  }
});

export default Unacademic;

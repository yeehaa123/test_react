import React from 'react';
import Actions from '../actions/index';

import Cards from './cards.jsx';
import Sidebar from './sidebar.jsx';
import css from '../styles/app.css';

let Unacademic = React.createClass({

  componentDidMount() {
    Actions.ready();
  },

  render() {
    return (
      <section className="app">
        <Sidebar />
        <Cards />
      </section>
    )
  }
});

export default Unacademic;

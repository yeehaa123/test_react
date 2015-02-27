import 'normalize.css/normalize.css';
import css from '../../styles/app.css';

import React from 'react';
import Sidebar from './sidebar.jsx';
import Main from './main.jsx';

class Unacademic extends React.Component{
  render() {
    return (
      <section className="app">
        <Sidebar />
        <Main />
      </section>
    )
  }
};

export default Unacademic;

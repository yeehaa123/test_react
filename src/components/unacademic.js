import React from 'react';
import Sidebar from './sidebar';
import Cards from './cards';

class Unacademic extends React.Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <Cards/>
      </div>
    )
  }
};

export default Unacademic;

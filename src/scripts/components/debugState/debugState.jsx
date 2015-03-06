import React from 'react';
import R from 'ramda';

import DebugStateSection from './debugStateSection.jsx';

class DebugState extends React.Component {

  render(){
    let { object } = this.props;
    let dataArray = R.toPairs(object);
    let createSections = R.map(([title, data]) =>
      <DebugStateSection key={ title } title={ title } data={ data } />);
    let sections = createSections(dataArray);

    return (
      <section className="debugState">
        <table className="debugger">
          { sections }
        </table>
      </section>
    )
  }
};

DebugState.propTypes = {
  object: React.PropTypes.object
}

export default DebugState;

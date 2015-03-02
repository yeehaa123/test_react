import React from 'react';
import _ from 'lodash';

import DebugStateSection from './debugStateSection.jsx';

class DebugState extends React.Component {

  render(){
    let { object } = this.props;
    let sections = _.map(object, (data, title) => {
      return <DebugStateSection key={ title } title={ title } data={ data } />
    });

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

import React from 'react';
import Sidebar from './sidebar';
import Cards from './cards';

import mach from 'mach';
import _ from 'lodash';

class Unacademic extends React.Component {

  constructor(props) {
    super(props);
    this.state = { waypoints: props.initialWaypoints };
  }

  componentDidMount(){
    mach.get('https://cth-curriculum.firebaseio.com/waypoint/yeehaa.json')
      .then((conn) => {
        let waypoints = _.values(JSON.parse(conn.responseText));
        this.setState({waypoints});
      });
  }

  render() {
    return (
      <div>
        <Sidebar/>
        <Cards waypoints={ this.state.waypoints}/>
      </div>
    )
  }
};

Unacademic.defaultProps = {
  initialWaypoints: []
}

export default Unacademic;

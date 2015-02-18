import React from 'react';
import Card from './card';
import mach from 'mach';
import _ from 'lodash';

let cardsStyle = {
  backgroundColor: 'red',
  display: 'block',
  height: '100vh',
  float: 'left'
}

class Cards extends React.Component {
  render() {
    let waypoints = this.props.waypoints.map((waypoint) => {
      return <Card key={waypoint.title} model={waypoint}/>
    });
    return (
     <section style={cardsStyle}>
       { waypoints }
     </section>
    )
  }
};


export default Cards;

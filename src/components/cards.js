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

let Cards = React.createClass({
  render() {
    let waypoints = this.props.waypoints.map((waypoint) => {
      return <Card key={waypoint} model={waypoint}/>
    });
    return (
     <section style={cardsStyle}>
       { waypoints }
     </section>
    )
  }
});


export default Cards;

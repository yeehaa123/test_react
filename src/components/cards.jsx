import React from 'react';
import Card from './card.jsx';
import _ from 'lodash';
import faker from 'faker';

class Waypoint {
  constructor(index) {
    this.id = index;
    this.title = faker.lorem.words(getRandomInt(1,4)).join(' ');
    this.image = faker.image.image();
    this.curator = 'Yeehaa';
    this.summary = faker.lorem.sentence();
    this.description = _.times(getRandomInt(1,3), () => faker.lorem.paragraph() );
    this.checkpoints = _.times(getRandomInt(2,6), () => faker.lorem.words(getRandomInt(1,4)).join(' '));
  };
};

let waypoints = _.times(10, (i) => new Waypoint(i) );

let Cards = React.createClass({
  render(){
    let cards =  _.map(waypoints, (waypoint) => <Card key={ waypoint.id } model={ waypoint }/> );
    return (
      <section className="cards">
        { cards }
      </section>
    )
  }
});

export default Cards;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

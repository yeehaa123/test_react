import faker from 'faker';
import Actions from '../actions/server.js'

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

let allWaypoints =  allWaypoints || _.times(10, (i) => new Waypoint(i) );
let userWaypoints =  userWaypoints || _.times(10, (i) => new Waypoint(i) );
let collection = [];

export default {
  getCollection({user, mode}){
    if(user){
      collection = userWaypoints;
    } else {
      collection = allWaypoints;
    }
    Actions.loadedCollection(collection);
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

import React from 'react';

let Checkpoint = React.createClass({
  render(){
    let check = () => <span>{ getRandomInt(0,2) === 1 ? 'x' : 'v' }</span>;
    return (
      <p className="checkpoint">{ check() }{ this.props.checkpoint }</p>
    )
  }
});

export default Checkpoint;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

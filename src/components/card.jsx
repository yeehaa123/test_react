import React from 'react';

let styles = () => {
  return {
    height: `${getRandomInt(30, 95)}%`
  }
}

let Card = React.createClass({
  render(){
    return (
      <section className="card" style={ styles() }>
        <hgroup>
          <h1>Fake Title</h1>
          <p>Fake Curator</p>
        </hgroup>
        <p>Lorem Ipsum Bla di Bla</p>
      </section>
    )
  }
});

export default Card;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

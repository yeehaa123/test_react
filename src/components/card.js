import React from 'react';

let styles = () => {
  return {
      boxSizing: 'border-box',
      margin: '20px',
      minWidth: '380px',
      padding: '10px',
      height: `${getRandomInt(30, 95)}%`,
      border: '1px solid black'
  }
}


let Card = React.createClass({
  render(){
    return (
      <section style={ styles() }>
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

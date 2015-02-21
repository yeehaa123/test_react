import React from 'react';

let styles = {
  app: {
    display: 'flex',
    height: '100%'
  },
  sidebar: {
    boxSizing: 'border-box',
    color: 'white',
    backgroundColor: 'black',
    minWidth: '400px',
    padding: '20px'
  },
  cards: {
    display: 'flex',
    padding: '20px',
    overflowX: 'scroll'
  },
  card: {
    boxSizing: 'border-box',
    margin: '20px',
    minWidth: '380px',
    padding: '10px',
    height: '70%',
    border: '1px solid black'
  }
}

let Card = React.createClass({
  render(){
    return (
      <section style={ styles.card }>
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

import React from 'react';
import Card from './card.jsx';

let styles = {
  cards: {
    display: 'flex',
    padding: '20px',
    overflowX: 'scroll'
  }
}

let Cards = React.createClass({
  render(){
    return (
      <section className="cards" style={ styles.cards }>
        { _.times(20, (index) => <Card key={ index }/> )}
      </section>
    )
  }
});

export default Cards;

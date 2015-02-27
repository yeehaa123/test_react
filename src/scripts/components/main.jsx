import React from 'react';
import Cards from './cards.jsx';
import '../../styles/card.css';

class Main extends React.Component {
  render() {
    return (
      <section className="main">
        <Cards />
        <section className="timeline"></section>
      </section>
    )
  }
}

export default Main;

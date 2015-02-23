import React from 'react';
import Cards from './cards.jsx';
import '../styles/card.css';

let Main = React.createClass({
  render() {
    return (
      <section className="main">
        <Cards />
        <section className="timeline"></section>
      </section>
    )
  }
});

export default Main;

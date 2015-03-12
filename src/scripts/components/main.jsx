import React from 'react';
import Cards from './cards.jsx';
import '../../styles/card.css';

class Main extends React.Component {
  render() {
    let { collection } = this.props.model;
    return (
      <section className="main">
        <Cards collection={ collection }/>
        <section className="timeline"></section>
      </section>
    )
  }
}

export default Main;

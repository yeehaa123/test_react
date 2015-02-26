import React from 'react';
import Checkpoint from './checkpoint.jsx';
import '../../styles/card.css';

let Card = React.createClass({
  render(){
    return (
      <section className="card">
        <hgroup>
          <h1>{ this.props.model.title }</h1>
        </hgroup>
        <img src={ this.props.model.image }></img>
        <section>
          <p>{ this.props.model.summary }</p>
        </section>
        <section>
          <p>{ this.props.model.curator }</p>
        </section>
        <section>
          { this.props.model.description.map((paragraph, index) => <p key={ index }>{ paragraph }</p>) }
        </section>
        <section>
          { this.props.model.checkpoints.map((checkpoint, index) => <Checkpoint key={ index } checkpoint={ checkpoint } />) }
        </section>
        <nav>
          <button>Explore</button>
          <button>Start</button>
        </nav>
      </section>
    )
  }
});

export default Card;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

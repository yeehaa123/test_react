import React from 'react';
import Checkpoint from './checkpoint';

let cardStyle = {
  backgroundColor: 'white',
  width: '400px',
  margin: '20px',
  padding: '20px',
  float: 'left'
};

class Card extends React.Component {

  checkpoints() {
    return this.props.model.checkpoints.map(checkpoint => <Checkpoint key={checkpoint.title} model={checkpoint}/>);
  }

  render(){
    return (
      <section style={cardStyle}>
        <hgroup>
          <h1>{ this.props.model.title }</h1>
          <p>{ this.props.model.curator }</p>
        </hgroup>
        <p>{ this.props.model.description }</p>
        <ol>{ this.checkpoints() }</ol>
      </section>
    )
  }
}

export default Card;

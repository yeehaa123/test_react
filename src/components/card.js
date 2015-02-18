import React from 'react';
import Checkpoint from './checkpoint.js';

let cardStyle = {
  backgroundColor: 'white',
  width: '400px',
  margin: '20px',
  padding: '20px',
  float: 'left'
};

class Card extends React.Component {
  renderCheckPoints() {
    if(this.props.model.checkpoints){
      let checkpoints = _.values(this.props.model.checkpoints);
      return checkpoints.map((checkpoint) => <Checkpoint key={checkpoint.id} model={checkpoint} />);
    }
  }

  render(){
    return (
      <section style={cardStyle}>
        <hgroup>
          <h1>{ this.props.model.title }</h1>
          <p>{ this.props.model.curator }</p>
        </hgroup>
        <p>{ this.props.model.description }</p>
        <ol>{ this.renderCheckPoints() }</ol>
      </section>
    )
  }
}

export default Card;

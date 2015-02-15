import React from 'react';

class Checkpoint extends React.Component {

  render(){
    return (
      <li key={this.props.model.title}>{ this.props.model.title }</li>
    );
  }
}

export default Checkpoint;

import React from 'react';
import R from 'ramda';

import Card from './card.jsx';
import Actions from '../actions/index'

class Cards extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let { collection } = this.props;
    let createCards = R.map((model) => <Card key={ model.id } model={ model }/>);
    let cards = createCards(collection);
    return (
      <section className="cards">{ cards }</section>
    )
  }
}

export default Cards;

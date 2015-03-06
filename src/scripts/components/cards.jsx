import React from 'react';
import R from 'ramda';

import { Model } from '../stores/index'
import Card from './card.jsx';
import Actions from '../actions/index'

class Cards extends React.Component {
  constructor(props){
    super(props);
    let { collection } = Model;
    this.state = { collection };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount () {
    Model.addChangeListener(this.onChange);
  }

  componentWillUnmount () {
    Model.removeChangeListener(this.onChange);
  }

  onChange () {
    let { collection } = Model;
    this.setState({ collection });
  }

  render(){
    let { collection } = this.state;
    let createCards = R.map((model) => <Card key={ model.id } model={ model }/>);
    let cards = createCards(collection);

    return (
      <section className="cards">{ cards }</section>
    )
  }
}

export default Cards;

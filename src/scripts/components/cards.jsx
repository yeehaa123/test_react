import React from 'react';
import _ from 'lodash';

import { Model } from '../stores/index'
import Card from './card.jsx';
import Actions from '../actions/index'

class Cards extends React.Component {
  constructor(props){
    super(props);
    let collection = Model.collection;
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
    let collection = Model.collection;
    this.setState({ collection });
  }

  render(){
    return (
      <section className="cards">
        { _.map(this.state.collection, (model) => <Card key={ model.id } model={ model }/>) }
      </section>
    )
  }
}

export default Cards;

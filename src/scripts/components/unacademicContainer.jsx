import React from 'react';

import Actions from '../actions/index'
import { AppState } from '../stores/index'

import Unacademic from './unacademic.jsx';

class UnacademicContainer extends React.Component{

  constructor(props){
    super(props);
    let { user } = AppState.current;
    this.state = { user };
    this.onChange = this.onChange.bind(this);
  }

  onChange(){
    let { user } = AppState.current;
    if(!this.state.user || this.state.user !== user){
      Actions.getCollection({ user });
    }
    this.setState({ user });
  }

  componentDidMount() {
    AppState.addChangeListener(this.onChange);
    this.onChange();
  }

  componentWillUnmount() {
    AppState.removeChangeListener(this.onChange);
  }


  render() {
    return (
      <Unacademic />
    )
  }
};

export default UnacademicContainer;

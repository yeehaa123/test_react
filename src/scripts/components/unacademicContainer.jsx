import React from 'react';

import Actions from '../actions/index'
import { AppState } from '../stores/index'
import { Model } from '../stores/index'

import Unacademic from './unacademic.jsx';

class UnacademicContainer extends React.Component{

  constructor(props){
    super(props);
    let appState = AppState.current;
    let model = Model;
    this.state = { AppState };
    this.onChange = this.onChange.bind(this);
  }

  onChange(){
    let appState = AppState.current;
    let model = Model;
    if(!this.state.user || this.state.user !== user){
      Actions.getCollection({ user });
    }
    this.setState({ appState });
  }

  componentDidMount() {
    AppState.addChangeListener(this.onChange);
    this.onChange();
  }

  componentWillUnmount() {
    AppState.removeChangeListener(this.onChange);
  }

  render() {
    let { model, user, mode } = this.state;
    return (
      <Unacademic model={ model } appState={ appState }/>
    )
  }
};

export default UnacademicContainer;

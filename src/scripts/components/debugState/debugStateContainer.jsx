import React from 'react';
import moment from 'moment';

import { AppState } from '../../stores/index';

import DebugState from './debugState.jsx';

class DebugStateContainer extends React.Component {

  constructor(props){
    super(props);
    let debugObject = this.createDebugObject();
    this.state = debugObject;
    this.onChange = this.onChange.bind(this);
  }

  onChange(){
    let debugObject = this.createDebugObject();
    return this.setState(debugObject);
  }

  getTime(timestamp){
    return moment(timestamp).startOf('minutes').fromNow();
  }

  createDebugObject(){
    let state = AppState.current;
    state.timestamp = this.getTime(state.timestamp);
    return this.divideDebugObject(state);
  }

  divideDebugObject(object){
    return _.reduce(object, (result, value, key) => {
      if(_.isObject(value)){
        result[key] = value;
      } else {
        result['general'] = result['general'] || {};
        result['general'][key] = value;
      }
      return result;
    }, {});
  }

  componentDidMount() {
    AppState.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    AppState.removeChangeListener(this.onChange);
  }

  render(){
    return (
      <DebugState object={this.state}></DebugState>
    )
  }
};

export default DebugStateContainer;

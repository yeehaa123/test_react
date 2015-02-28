import React from 'react';
import { AppState } from '../stores/index';
import moment from 'moment';

class DebugState extends React.Component {

  constructor(props){
    super(props);
    this._onChange = this._onChange.bind(this);
    this.getTime = this.getTime.bind(this);
    let state = AppState.current;
    state.timestamp = this.getTime(state.timestamp);
    this.state = state;
  }

  componentDidMount() {
    AppState.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppState.removeChangeListener(this._onChange);
  }

  _onChange(){
    let state = AppState.current;
    state.timestamp = this.getTime(state.timestamp);
    return this.setState(state);
  }

  getTime(timestamp){
    return moment(timestamp).startOf('minutes').fromNow();
  }

  row(key, value){
    return <tr key={key}><td>{key}</td><td>{ `${value}` || '---' }</td></tr>
  }

  render(){
    return (
      <section className="debugState">
        <table className="debugger">
          { _.map(this.state, (value, key) =>  this.row(key, value)) }
        </table>
      </section>
    )
  }
};

export default DebugState;

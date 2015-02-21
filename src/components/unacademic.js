import 'normalize.css/normalize.css';
import React from 'react';
import Reflux from 'reflux';
import { actions, HistoryStore, AppStore } from '../appStore';
import Card from './card';
import css from '../app.css';


let styles = {
  app: {
    display: 'flex',
    height: '100%'
  },
  cards: {
    display: 'flex',
    padding: '20px',
    overflowX: 'scroll'
  },
  card: {
    boxSizing: 'border-box',
    margin: '20px',
    minWidth: '380px',
    padding: '10px',
    border: '1px solid black'
  }
}

let Unacademic = React.createClass({

  getInitialState(){
    let appState = HistoryStore.getState();
    console.log(appState);
    let state = this.updateState(appState);
    return state;
  },

  componentDidMount() {
    this.unsubscribeAppStore = AppStore.listen(this.onChange);
    this.unsubscribeHistoryStore = HistoryStore.listen(this.onChange);
  },
  componentWillUnmount() {
    this.unsubscribeAppStore();
    this.unsubscribeHistoryStore();
  },

  onChange(appState){
    let state = this.updateState(appState);
    return this.replaceState(state);
  },

  updateState(state){
    let user = state.get('user');
    return { user }
  },

  handleClick(){
    actions.authenticate();
  },

  revertHistory(){
    actions.revertHistory();
  },

  forwardHistory(){
    actions.forwardHistory();
  },



  render() {
    return (
      <div className="app" style={ styles.app }>
        <div className="sidebar">
          <div>
            <h1>_Unacademic</h1>
          </div>
          <div>
            { debugState(this.state) }
          </div>
          <div>
            <button onClick={ this.revertHistory }>Revert History</button>
          </div>
          <div>
            <button onClick={ this.forwardHistory }>Forward History</button>
          </div>
          <div>
            <button onClick={ this.handleClick }>Sign In</button>
          </div>
        </div>
        <div className="cards" style={ styles.cards }>
          { _.times(20, (index) => <Card key={ index }/> )}
        </div>
      </div>
    )
  }
});

export default Unacademic;

function debugState(object){
  let row = (key, value) => {
    return <tr key={key}><td>{key}</td><td>{ value || '---' }</td></tr>
  };
  return (
    <table className="debugger">
    { _.map(object, (value, key) =>  row(key, value) )}
    </table>
  )
}

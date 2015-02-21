import 'normalize.css/normalize.css';
import React from 'react';
import Reflux from 'reflux';
import AppStore from '../appStore';
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
    height: '70%',
    border: '1px solid black'
  }
}

let Unacademic = React.createClass({

  getInitialState(){
    let value = AppStore.getState().get('value');
    return { value }
  },

  componentDidMount() {
    this.unsubscribe = AppStore.listen(this.onChange);
  },
  componentWillUnmount() {
    this.unsubscribe();
  },

  onChange(appState){
    let value = appState.get('value');
    return this.replaceState({value});
  },

  debugger(object){
    let row = (key, value) => {
      return <tr key={key}><td>{key} - { value }</td></tr>
    };
    return (
      <table className="debugger">
        { _.map(object, (value, key) =>  row(key, value) )}
      </table>
    )
  },

  render() {
    return (
      <div className="app" style={ styles.app }>
        <div className="sidebar">
          <h1>_Unacademic</h1>
          { this.debugger(this.state) }
        </div>
        <div className="cards" style={ styles.cards }>
          { _.times(20, (index) => <Card key={ index }/> )}
        </div>
      </div>
    )
  }
});

export default Unacademic;

import React from 'react';

let DebugState = React.createClass({
  row(key, value){
    return <tr key={key}><td>{key}</td><td>{ value || '---' }</td></tr>
  },
  render(){
    return (
      <section className="debugState">
        <table className="debugger">
        { _.map(this.props.object, (value, key) =>  this.row(key, value) )}
        </table>
      </section>
    )
  }
});

export default DebugState;

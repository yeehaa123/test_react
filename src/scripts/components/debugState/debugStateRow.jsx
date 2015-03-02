import React from 'react';
class DebugStateRow extends React.Component {

  render(){
    let { title, data } = this.props;
    return <tr><td>{title}</td><td>{ `${data}` }</td></tr>
  }
};

DebugStateRow.propTypes = {
  title: React.PropTypes.string,
  data: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ])
};

DebugStateRow.defaultProps = {
  data: '---'
};

export default DebugStateRow;

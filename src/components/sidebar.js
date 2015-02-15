import React from 'react';

let sidebarStyle = {
  backgroundColor: 'black',
  width: '400px',
  display: 'block',
  height: '100vh',
  float: 'left'
}

class Cards extends React.Component {
  render() {
    return (
     <section style={sidebarStyle}/>
    )
  }
};

export default Cards;

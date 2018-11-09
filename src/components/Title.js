import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  render() {
    return (
      <div className="Title">
        {this.props.children}
      </div>
    );
  }
}

export default Title;

import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  componentDidMount() {
    console.log('componentDidMount Title');
  }

  componentDidUpdate() {
    console.log('componentDidUpdte Title');
  }

  shouldComponentUpdate(nextProps, nexState) {
    if(this.props.children !== nextProps.children) return true;
    return false;
  }

  render() {
    return (
      <div className="Title">
        {this.props.children}
      </div>
    );
  }
}

export default Title;

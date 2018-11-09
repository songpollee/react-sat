import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  componentDidMount() {
    console.log('componentDidMount Button');
  }

  componentDidUpdate() {
    console.log('componentDidUpdte Button');
  }

  shouldComponentUpdate(nextProps, nexState) {
    if(this.props.children !== nextProps.children) return true;
    return false;
  }

  render() {
    return (
      <button className="Button" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;

import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  componentDidMount() {
    console.log('componentDidMount Item');
  }

  componentDidUpdate() {
    console.log('componentDidUpdte Item');
  }

  shouldComponentUpdate(nextProps, nexState) {
    if(this.props.children !== nextProps.children) return true;
    return false;
  }

  render() {
    return (
      <div className="Item">
        {this.props.children}
      </div>
    );
  }
}

export default Item;

import React, { Component } from 'react';
import Title from '../components/Title';
import Item from '../components/Item';

class TodoPage extends Component {
  render() {
    return (
      <div className="TodoPage">
        <Title />
        <Item />
        <Item />
      </div>
    );
  }
}

export default TodoPage;

import React, { Component } from 'react';
import Title from '../components/Title';
import Item from '../components/Item';

class TodoPage extends Component {
  render() {
    return (
      <div className="TodoPage">
        <Title>Todo App</Title>
        <Item>Item's Todo1</Item>
        <Item>Item's Todo2</Item>
      </div>
    );
  }
}

export default TodoPage;

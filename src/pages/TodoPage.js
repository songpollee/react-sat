import React, { Component } from 'react';
import { map } from 'lodash/fp';
import Title from '../components/Title';
import Item from '../components/Item';
import Button from '../components/Button';

class TodoPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Hello React',
      items: ['Item', 'Item'],
    };
    this.onClickAddButton = this.onClickAddButton.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount todoPage');
  }

  componentDidUpdate() {
    console.log('componentDidUpdte todoPage');
  }

  onClickAddButton() {
    const items = this.state.items;
    this.setState((state) => ({ items: [...items, 'item'] }));
  }

  render() {
    return (
      <div className="TodoPage">
        <Title>{this.state.title}</Title>
        {map((item) => (<Item>{item}</Item>))(this.state.items)}
        <Button onClick={this.onClickAddButton}>add</Button>
      </div>
    );
  }
}

export default TodoPage;

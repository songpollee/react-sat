import React from 'react';
import { map } from 'lodash/fp';
import { compose, withState, withHandlers } from 'recompose';
import Title from '../components/Title';
import Item from '../components/Item';
import Button from '../components/Button';

const TodoPage = ({ title, items, onClickAddButton}) => (
  <div className="TodoPage">
    <Title>{title}</Title>
    {map((item) => (<Item>{item}</Item>))(items)}
    <Button onClick={onClickAddButton}>add</Button>
  </div>
);

export default compose(
  withState('title', 'setTitle', 'Hello React'),
  withState('items', 'setItems', ['item', 'item']),
  withHandlers({
    onClickAddButton: ({ items, setItems }) => () => {
      setItems([...items, 'item']);
    },
  }),
)(TodoPage);

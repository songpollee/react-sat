import React from 'react';
import { connect } from 'react-redux';
import { map, get, toPairs } from 'lodash/fp';
import { compose, withState, lifecycle } from 'recompose';
import Title from '../components/Title';
import Item from '../components/Item';
import Button from '../components/Button';
import { addTodo } from '../actions/todoAction';

const TodoPage = ({ title, items, onClickAddButton}) => (
  <div className="TodoPage">
    <Title>{title}</Title>
    {compose(
      map(([key, item]) => (<Item key={key}>{item}</Item>)),
      toPairs,
    )(items)}
    <Button onClick={onClickAddButton}>add</Button>
  </div>
);

const mapStateToProps = (state) => ({
  items: get(['todo'])(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClickAddButton: () => dispatch(addTodo('item')),
});

export default compose(
  withState('title', 'setTitle', 'Hello React'),
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      console.log('componentDidMount TodoPage');
    },
    componentDidUpdate() {
      console.log('componentDidUpdate TodoPage');
    },
  }),
)(TodoPage);

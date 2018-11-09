import React from 'react';
import { connect } from 'react-redux';
import { map, get, toPairs } from 'lodash/fp';
import { compose, withState, lifecycle, withProps } from 'recompose';
import { Field, reduxForm } from 'redux-form';
import Title from '../components/Title';
import Item from '../components/Item';
import Button from '../components/Button';
import { addTodo } from '../actions/todoAction';

const TodoPage = ({ title, items, onClickAddButton, handleSubmit }) => (
  <div className="TodoPage">
    <Title>{title}</Title>
    {compose(
      map(([key, item]) => (<Item key={key}>{item}</Item>)),
      toPairs,
    )(items)}
    <form onSubmit={handleSubmit}>
      <Field name="text" component="input" type="text" />
      <Button type="submit">add</Button>
    </form>
  </div>
);

const mapStateToProps = (state) => ({
  items: get(['todo'])(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClickAddButton: (value) => dispatch(addTodo(value)),
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
  withProps(({ onClickAddButton }) => ({
    onSubmit: ({ text }) => onClickAddButton(text),
  })),
  reduxForm({ form: 'todoForm' }),
)(TodoPage);

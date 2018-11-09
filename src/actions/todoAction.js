const ADD_TODO = 'ADD_TODO';

const addTodo = (text) => ({
  type: ADD_TODO,
  text,
});

export { addTodo, ADD_TODO };

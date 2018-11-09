import { ADD_TODO } from '../actions/todoAction';

const todoReducer = (state = ['item', 'item'], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.text]
    default:
      return state;
  }
};

export default todoReducer;

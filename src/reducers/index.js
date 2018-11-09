import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import todo from './todoReducer';

export default combineReducers({
  // redux-form
  form,
  // reducers
  todo,
})

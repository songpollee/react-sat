import React from 'react';
import { compose, lifecycle, pure } from 'recompose';
import './Button.css';

const Button = ({children, onClick}) => (
  <button className="Button" onClick={onClick}>
    {children}
  </button>
);

export default compose(
  pure,
  lifecycle({
    componentDidMount() {
      console.log('componentDidMount Button');
    },
    componentDidUpdate() {
      console.log('componentDidUpdate Button');
    },
  }),
)(Button);

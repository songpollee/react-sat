import React from 'react';
import { compose, lifecycle, pure } from 'recompose';
import './Button.css';

const Button = ({ children, onClick, ...otherProps }) => (
  <button className="Button" onClick={onClick} {...otherProps}>
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

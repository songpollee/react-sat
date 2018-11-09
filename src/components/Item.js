import React from 'react';
import { compose, lifecycle, pure } from 'recompose';
import './Item.css';

const Item = ({ children }) => (
  <div className="Item">
    {children}
  </div>
);

export default compose(
  pure,
  lifecycle({
    componentDidMount() {
      console.log('componentDidMount Item');
    },
    componentDidUpdate() {
      console.log('componentDidUpdate Item');
    },
  }),
)(Item);

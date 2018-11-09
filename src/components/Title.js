import React from 'react';
import { compose, lifecycle, pure } from 'recompose';
import './Title.css';

const Title = ({ children }) => (
  <div className="Title">
    {children}
  </div>
);

export default compose(
  pure,
  lifecycle({
    componentDidMount() {
      console.log('componentDidMount Title');
    },
    componentDidUpdate() {
      console.log('componentDidUpdate Title');
    },
  }),
)(Title);

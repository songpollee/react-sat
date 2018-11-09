import React from 'react';
import './Button.css';

const Button = ({children, onClick}) => (
  <button className="Button" onClick={onClick}>
    {children}
  </button>
);

export default Button;

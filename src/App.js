import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import './App.css';

const App = () => (
  <div>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </div>
);

export default App;

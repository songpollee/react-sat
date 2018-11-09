import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';

const AppRouter = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/todo" component={TodoPage} />
    </Switch>
  </div>
);

export default AppRouter;

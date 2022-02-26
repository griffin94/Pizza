import React from 'react';
import { Header, Main } from 'components';
import Routes from 'routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <Router>
    <Header />
    <Main>
      <Routes />
    </Main>
  </Router>
);

export default App;

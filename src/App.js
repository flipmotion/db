import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu';
import AppRouter from './containers/AppRouter';
import IntApp from './components/IntApp';
import contentIn from './content';

const App = props => (
  <IntApp
    render={(lang, toggleLang) => {
      content = contentIn(lang);
      return (
        <Router>
          <Menu setLang={toggleLang}>
            <AppRouter />
          </Menu>
        </Router>
      );
    }}
  />
);

export default App;

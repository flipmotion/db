import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu';
import AppRouter from './containers/AppRouter';
import IntApp from './containers/IntApp';
import contentIn from './content';

const App = props => (
  <IntApp
    render={(lang, toggleLang) => {
      const content = contentIn(lang);
      return (
        <Router>
          <Menu toggleLang={toggleLang} links={content.menu.top}>
            <AppRouter lang={lang} />
          </Menu>
        </Router>
      );
    }}
  />
);

export default App;

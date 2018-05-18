import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu';
import AppRouter from './containers/AppRouter';
import Context, { globalStateIn, defaultLang } from './Context';

// lang, content and color theme constitute a global state
class App extends Component {
  constructor() {
    super();
    this.state = globalStateIn(defaultLang);
    this.setLang = lang => this.setState(globalStateIn(lang));
  }

  render() {
    return (
      <Router>
        <Context.Provider value={this.state}>
          <Menu setLang={this.setLang}>
            <AppRouter />
          </Menu>
        </Context.Provider>
      </Router>
    );
  }
}

export default App;

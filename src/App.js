import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import Div100vh from 'react-div-100vh';
import { Transition } from 'react-transition-group';
import Menu from './components/Menu/Menu';
import AppRouter from './containers/AppRouter';
import IntApp from './containers/IntApp';
import Enquiry from './components/Enquiry';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    overflow: hidden;
  }
`;

const transitionDuration = 850;

function App() {
  return (
    // IntApp just holds lang state and provides lang change function
    <IntApp>
      {(lang, toggleLang) => (
        <Div100vh>
          <Router>
            <Fragment>
              <Menu lang={lang} toggleLang={toggleLang}>
                <AppRouter lang={lang} />
              </Menu>

              {/* pop-up is a separate branch of the routing tree */}
              <Route
                render={({ location }) => (
                  <Transition
                    in={location.hash === '#inquiry'}
                    key={location.pathname}
                    timeout={{ enter: 0, exit: transitionDuration }}
                    mountOnEnter
                    unmountOnExit
                  >
                    {transitionStage => (
                      <Enquiry
                        transitionStage={transitionStage}
                        transitionDuration={transitionDuration}
                        lang={lang}
                      />
                    )}
                  </Transition>
                )}
              />
            </Fragment>
          </Router>
        </Div100vh>
      )}
    </IntApp>
  );
}

export default App;

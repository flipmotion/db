import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import MenuContainer from './containers/MenuContainer';
import AppRouter from './containers/AppRouter';
import IntApp from './containers/IntApp';
import contentIn from './content';
import { TopBar, BottomBar, MobileBar } from './components/Menu/MenuBars';
import LangIcon from './components/Menu/LangIcon';
import Enquiry from './components/Enquiry';
import { injectGlobal } from 'styled-components';
import Div100vh from 'react-div-100vh';
import { Transition } from 'react-transition-group';

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
    <IntApp
      render={(lang, toggleLang) => {
        const content = contentIn(lang);
        return (
          // Div100vh makes viewport size stable (bottom menu is always there)
          <Div100vh>
            <Router>
              <React.Fragment>
                <MenuContainer
                  topBar={
                    <TopBar
                      logo={
                        <Link to="/">
                          <img
                            src={content.logo.src}
                            alt={content.logo.alt}
                            style={{ height: '3em', width: '3em' }}
                            // otherwise menu jumps because logo loads later
                            width="3em"
                            height="3em"
                          />
                        </Link>
                      }
                    >
                      {content.menu.top}
                      <LangIcon onClick={toggleLang} lang={lang} />
                    </TopBar>
                  }
                  bottomBar={<BottomBar>{content.menu.bottom}</BottomBar>}
                  mobileBar={
                    <MobileBar>
                      {content.menu.top}
                      <p>---</p>
                      {content.menu.bottom}
                    </MobileBar>
                  }
                >
                  <AppRouter lang={lang} />
                </MenuContainer>

                {/* here comes the pop-up (one for now, maybe more later) */}
                <Route
                  render={({ location }) => (
                    <Transition
                      in={location.hash === '#inquiry'}
                      key={location.pathname}
                      timeout={{ enter: 0, exit: transitionDuration }}
                      mountOnEnter={true}
                      unmountOnExit={true}
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
              </React.Fragment>
            </Router>
          </Div100vh>
        );
      }}
    />
  );
}

export default App;

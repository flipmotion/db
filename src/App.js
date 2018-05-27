import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import MenuContainer from './containers/MenuContainer';
import AppRouter from './containers/AppRouter';
import IntApp from './containers/IntApp';
import contentIn from './content';
import { TopBar, BottomBar, MobileBar } from './components/Menu/MenuBars';
import LangIcon from './components/Menu/LangIcon';
import LogoWrapper from './components/Menu/LogoWrapper';
import { injectGlobal } from 'styled-components';
import Div100vh from './components/Div100vh';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    /* overflow: hidden; */
  }
`;

const App = props => (
  <IntApp
    render={(lang, toggleLang) => {
      const content = contentIn(lang);
      return (
        <Div100vh>
          <Router>
            <MenuContainer
              topBar={
                <TopBar
                  logo={
                    <LogoWrapper>
                      <Link to="/">
                        <img
                          src={content.logo.src}
                          alt={content.logo.alt}
                          style={{ height: '3rem' }}
                        />
                      </Link>
                    </LogoWrapper>
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
          </Router>
        </Div100vh>
      );
    }}
  />
);

export default App;

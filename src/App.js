import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import MenuContainer from './containers/MenuContainer';
import AppRouter from './containers/AppRouter';
import IntApp from './containers/IntApp';
import contentIn from './content';
import { TopBar } from './components/Menu/MenuBars';
import LangIcon from './components/Menu/LangIcon';
import LogoWrapper from './components/Menu/LogoWrapper';

const App = props => (
  <IntApp
    render={(lang, toggleLang) => {
      const content = contentIn(lang);
      return (
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
          >
            <AppRouter lang={lang} />
          </MenuContainer>
        </Router>
      );
    }}
  />
);

export default App;

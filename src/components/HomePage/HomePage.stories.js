import React from 'react';
import { storiesOf } from '@storybook/react';
import HomePage from './HomePage';
import { BrowserRouter as Router } from 'react-router-dom';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import MenuContainer from '../../containers/MenuContainer';
import contentIn from '../../content';
import IntApp from '../../containers/IntApp';
import { TopBar, BottomBar, MobileBar } from '../../components/Menu/MenuBars';
import LangIcon from '../../components/Menu/LangIcon';
import styled from 'styled-components';

const homePage = storiesOf('Home page', module);

homePage.addDecorator(withKnobs);

const FullHeight = styled.div`
  height: 100vh;
`;

// Something very basic for now
const Splitter = () => <div>---</div>;

const label = 'Animation stages';

const transitionStages = {
  entering: 'entering',
  entered: 'entered',
  exiting: 'exiting',
  exited: 'exited'
};

const defaultStage = 'entered';
const groupId = 'HomePageGroup';

homePage.add('Menu', () => (
  <FullHeight>
    <IntApp
      render={(lang, toggleLang) => {
        const content = contentIn(lang);
        return (
          <Router>
            <MenuContainer
              toggleLang={toggleLang}
              topBar={
                <TopBar>
                  <img
                    src={content.logo.src}
                    alt={content.logo.alt}
                    style={{ height: '3rem' }}
                  />
                  {content.menu.top}
                  <LangIcon onClick={toggleLang} />
                </TopBar>
              }
              bottomBar={<BottomBar>{content.menu.bottom}</BottomBar>}
              mobileBar={
                <MobileBar>
                  {content.menu.top}
                  <Splitter />
                  {content.menu.bottom}
                </MobileBar>
              }
            >
              <HomePage
                transitionStage={select(
                  label,
                  transitionStages,
                  defaultStage,
                  groupId
                )}
                lang={lang}
              />
            </MenuContainer>
          </Router>
        );
      }}
    />
  </FullHeight>
));
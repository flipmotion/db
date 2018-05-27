import React from 'react';
import { storiesOf } from '@storybook/react';
import HomePage from './HomePage';
import { BrowserRouter as Router } from 'react-router-dom';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import MenuContainer from '../containers/MenuContainer';
import contentIn from '../content';
import IntApp from '../containers/IntApp';
import { TopBar, BottomBar, MobileBar } from '../components/Menu/MenuBars';
import LangIcon from '../components/Menu/LangIcon';
import styled from 'styled-components';
import LogoWrapper from '../components/Menu/LogoWrapper';

const homePage = storiesOf('Home page', module);

homePage.addDecorator(withKnobs);

const FullHeight = styled.div`
  height: 100vh;
`;

// Something very basic for now
const Splitter = () => <div>---</div>;

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
                  <LogoWrapper>
                    <img
                      src={content.logo.src}
                      alt={content.logo.alt}
                      style={{ height: '3rem' }}
                    />
                  </LogoWrapper>
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
                animationStage={
                  boolean('animation stage "entered"', true)
                    ? 'entered'
                    : 'exited'
                }
                header={text('Header', content.homePage.header)}
                paragraphText={text(
                  'Paragraph text',
                  content.homePage.paragraphText
                )}
                linkText={text('Link text', content.homePage.link.text)}
                linkPath={content.homePage.link.path}
                imageSrc={content.homePage.media[0].src}
                imageAlt={content.homePage.media[0].alt}
              />
            </MenuContainer>
          </Router>
        );
      }}
    />
  </FullHeight>
));

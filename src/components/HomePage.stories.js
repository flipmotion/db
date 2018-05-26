import React from 'react';
import { storiesOf } from '@storybook/react';
import HomePage from './HomePage';
import { BrowserRouter as Router } from 'react-router-dom';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import MenuContainer from '../containers/MenuContainer';
import contentIn from '../content';
import IntApp from '../containers/IntApp';
import { TopBar } from '../components/Menu/MenuBars';
import LangIcon from '../components/Menu/LangIcon';
import styled from 'styled-components';

const homePage = storiesOf('Home page', module);

homePage.addDecorator(withKnobs);

const FullHeight = styled.div`
  height: 100vh;
`;

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
                  {content.menu.top}
                  <LangIcon onClick={toggleLang} />
                </TopBar>
              }
            >
              <HomePage
                animationStage={boolean('visible', true) ? 'entered' : 'exited'}
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

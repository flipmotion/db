import React from 'react';
import { storiesOf } from '@storybook/react';
import HomePage from './HomePage';
import { BrowserRouter as Router } from 'react-router-dom';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import contentIn from '../content';
import IntApp from './IntApp';

const homePage = storiesOf('Home page', module);

homePage.addDecorator(withKnobs);

homePage.add('Menu', () => (
  <IntApp
    render={(lang, toggleLang) => {
      const content = contentIn(lang);
      return (
        <Router>
          <Menu
            toggleLang={toggleLang}
            links={content.menu.top}
            children={
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
            }
          />
        </Router>
      );
    }}
  />
));

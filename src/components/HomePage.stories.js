import React from 'react';
import { storiesOf } from '@storybook/react';
import HomePage from './HomePage';
import { BrowserRouter as Router } from 'react-router-dom';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import * as content from '../content';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';

const homePage = storiesOf('Home page', module);

function generateLinks(n) {
  return Array(n)
    .fill()
    .map((_, i) => (
      <MenuItem key={i + 1} to={`/top-link-${i + 1}`}>
        Top&nbsp;link&nbsp;{i + 1}
      </MenuItem>
    ));
}

homePage.addDecorator(story => (
  <Router>
    <Menu links={generateLinks(6)}>{story()}</Menu>
  </Router>
));

homePage.addDecorator(withKnobs);

homePage.add('Home page', () => (
  <HomePage
    animationStage={boolean('visible', true) ? 'entered' : 'exited'}
    header={text('Header', content.homePage.header.ru)}
    paragraphText={text('Paragraph text', content.homePage.paragraphText.ru)}
    linkText={text('Link text', content.homePage.link.text.ru)}
    linkPath={content.homePage.link.path}
    imageSrc={content.homePage.media[0].src}
    imageAlt={content.homePage.media[0].alt}
  />
));

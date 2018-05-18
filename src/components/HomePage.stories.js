import React from 'react';
import { storiesOf } from '@storybook/react';
import HomePage from './HomePage';
import { BrowserRouter as Router } from 'react-router-dom';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import Context from '../Context';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import LangIcon from './Menu/LangIcon';

const homePage = storiesOf('Home page', module);

homePage.addDecorator(story => (
  <Context.Consumer>
    {globalState => (
      <Router>
        <Menu
          icon={<LangIcon onClick={globalState.shuffleLang} />}
          links={globalState.content.menu.top.map((item, index) => (
            <MenuItem to={item.to} key={index}>
              {item.text}
            </MenuItem>
          ))}
        >
          {story()}
        </Menu>
      </Router>
    )}
  </Context.Consumer>
));

homePage.addDecorator(withKnobs);

homePage.add('Home page', () => (
  <Context.Consumer>
    {globalState => (
      <HomePage
        animationStage={boolean('visible', true) ? 'entered' : 'exited'}
        header={text('Header', globalState.content.homePage.header)}
        paragraphText={text(
          'Paragraph text',
          globalState.content.homePage.paragraphText
        )}
        linkText={text('Link text', globalState.content.homePage.link.text)}
        linkPath={globalState.content.homePage.link.path}
        imageSrc={globalState.content.homePage.media[0].src}
        imageAlt={globalState.content.homePage.media[0].alt}
      />
    )}
  </Context.Consumer>
));

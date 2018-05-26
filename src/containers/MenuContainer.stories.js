import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuContainer from './MenuContainer';
import { injectGlobal } from 'styled-components';
import { TopBar, BottomBar, MobileBar } from '../components/Menu/MenuBars';

injectGlobal`
  body {
    margin: 0;
  }
`;

const menuContainer = storiesOf('Menu container', module);

menuContainer.addDecorator(story => (
  <div style={{ height: '100vh' }}>{story()}</div>
));

menuContainer.add('Does not blow up empty', () => <MenuContainer />);

menuContainer.add('Just content', () => (
  <MenuContainer>
    <p>Hello world</p>
  </MenuContainer>
));

menuContainer.add('Content and top bar', () => (
  <MenuContainer
    topBar={<TopBar links={[<p>link1</p>, <p>link2</p>, <p>link3</p>]} />}
  >
    <p>Hello world</p>
  </MenuContainer>
));

menuContainer.add('Content and top and bottom bars', () => (
  <MenuContainer
    topBar={<TopBar links={[<p>link1</p>, <p>link2</p>, <p>link3</p>]} />}
    bottomBar={<BottomBar links={[<p>link5</p>, <p>link6</p>, <p>link7</p>]} />}
  >
    <p>Hello world</p>
  </MenuContainer>
));

menuContainer.add('Menu turns to hamburger', () => {
  const topLinks = Array(12)
    .fill()
    .map(_ => <p style={{ whiteSpace: 'nowrap' }}> some link</p>);
  const bottomLinks = [
    <p>BottomLink1</p>,
    <p>BottomLink2</p>,
    <p>BottomLink3</p>
  ];
  const mobileLinks = [...topLinks, <p>----</p>, ...bottomLinks];

  return (
    <MenuContainer
      topBar={<TopBar links={topLinks} />}
      bottomBar={<BottomBar links={bottomLinks} />}
      mobileBar={<MobileBar>{mobileLinks}</MobileBar>}
    >
      <p>Hello world</p>
    </MenuContainer>
  );
});

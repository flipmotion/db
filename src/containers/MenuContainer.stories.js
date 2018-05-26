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
  <div style={{ height: '80vh', width: '80vw', background: 'grey' }}>
    {story()}
  </div>
));

menuContainer.add('Does not blow up empty', () => <MenuContainer />);

menuContainer.add('Just content', () => (
  <MenuContainer>
    <p>Hello world</p>
  </MenuContainer>
));

menuContainer.add('Content and top bar', () => (
  <MenuContainer
    topBar={
      <TopBar>
        {[<p>link1</p>, <p>link2</p>, <p>link3</p>].map((el, i) =>
          React.cloneElement(el, { key: i })
        )}
      </TopBar>
    }
  >
    <p>Hello world</p>
  </MenuContainer>
));

menuContainer.add('Content and top and bottom bars', () => (
  <MenuContainer
    topBar={
      <TopBar>
        {[<p>link1</p>, <p>link2</p>, <p>link3</p>].map((el, i) =>
          React.cloneElement(el, { key: i })
        )}
      </TopBar>
    }
    bottomBar={
      <BottomBar>
        {[<p>link5</p>, <p>link6</p>, <p>link7</p>].map((el, i) =>
          React.cloneElement(el, { key: i })
        )}
      </BottomBar>
    }
  >
    <p>{'Hello world '.repeat(2000)}</p>
  </MenuContainer>
));

menuContainer.add('Menu turns to hamburger', () => {
  const topLinks = Array(12)
    .fill()
    .map((_, i) => (
      <p key={i} style={{ whiteSpace: 'nowrap' }}>
        {' '}
        some link
      </p>
    ));
  const bottomLinks = [
    <p>BottomLink1</p>,
    <p>BottomLink2</p>,
    <p>BottomLink3</p>
  ].map((el, i) => React.cloneElement(el, { key: i }));
  const mobileLinks = [...topLinks, <p>----</p>, ...bottomLinks].map((el, i) =>
    React.cloneElement(el, { key: i })
  );

  return (
    <MenuContainer
      topBar={<TopBar>{topLinks}</TopBar>}
      bottomBar={<BottomBar>{bottomLinks}</BottomBar>}
      mobileBar={<MobileBar>{mobileLinks}</MobileBar>}
    >
      <p>{'Hello world '.repeat(2000)}</p>
    </MenuContainer>
  );
});

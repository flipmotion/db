import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { TopBar, BottomBar, MobileBar } from './MenuBars';
import LogoWrapper from './LogoWrapper';

const bars = storiesOf('Menu bars', module);

bars.addDecorator(withKnobs);

bars.add('Empty bar', () => <TopBar />);

bars.add('Some menu items with some inline styling', () => (
  <TopBar style={{ background: 'red' }}>
    <div>link 1</div>
    <div>link 2</div>
    <div>link 3</div>
  </TopBar>
));

bars.add('Logo', () => (
  <TopBar
    isOpen={boolean('is open', false)}
    inBurgerMode={boolean('in burger mode', false)}
    logo={
      <LogoWrapper>
        <p>Logo</p>
      </LogoWrapper>
    }
  >
    <div>link 1</div>
    <div>link 2</div>
    <div>link 3</div>
  </TopBar>
));

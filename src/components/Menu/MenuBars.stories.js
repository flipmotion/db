import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { TopBar, BottomBar, MobileBar } from './MenuBars';

const bars = storiesOf('Menu bars', module);

bars.addDecorator(withKnobs);

bars.add('Empty Top Bar', () => <TopBar />);

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
    logo={<p>Logo</p>}
  >
    <div>link 1</div>
    <div>link 2</div>
    <div>link 3</div>
  </TopBar>
));

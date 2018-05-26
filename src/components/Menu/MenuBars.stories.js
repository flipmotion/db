import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { TopBar, BottomBar, MobileBar } from './MenuBars';

const bars = storiesOf('Menu bars', module);

bars.addDecorator(withKnobs);

bars.add('Empty bar', () => <TopBar />);

bars.add('Some menu items', () => <TopBar />);

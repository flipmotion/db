import React from 'react';
import { storiesOf } from '@storybook/react';
import CameraRoll from './CameraRoll';

const portfolio = storiesOf('Portfolio', module);

portfolio.add('smoke test', () => <CameraRoll />);

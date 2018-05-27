import React from 'react';
import { storiesOf } from '@storybook/react';
import Div100vh from './Div100vh';

const fullHeight = storiesOf('Full window height div', module);

fullHeight.add('full window height', () => (
  <div>
    <Div100vh style={{ background: 'pink' }}>
      <div>
        This is a 100vh div. Also see text below it. This is a workaround for{' '}
        <a href="https://nicolas-hoizey.com/2015/02/viewport-height-is-taller-than-the-visible-part-of-the-document-in-some-mobile-browsers.html">
          iOS 100vh crop issue.
        </a>
      </div>
    </Div100vh>
    <div>This goes after full window height div</div>
  </div>
));

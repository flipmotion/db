import React from 'react';
import { storiesOf } from '@storybook/react';
import Form from './Form';
import Div100vh from 'react-div-100vh';

const form = storiesOf('Form', module);

function Div100vhDecorator(story) {
  return <Div100vh>{story()}</Div100vh>;
}

form.addDecorator(Div100vhDecorator);

form.add('Form', () => <Form />);

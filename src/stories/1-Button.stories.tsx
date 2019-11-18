/* eslint-disable import/first */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import './style.scss';
import { Button } from '../components/Button/Button';

export default {
  title: 'Button'
};

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addParameters({ component: Button, info: { inline: true } })
  .add('Plain', () => (
    <div style={{padding: 16}}>
      <Button
        onClick={action('clicked')}
        disabled={boolean("disabled", false)}>
        Primary
      </Button>
      <Button
        onClick={action('clicked')}
        disabled>
        Disabled
      </Button>
    </div>
  ))
  .add('with icon', () => (
    <div style={{padding: 16}}>
      <Button
        icon='world'
        onClick={action('clicked')}
        disabled={boolean("disabled", false)}>
        World
      </Button>
    </div>
  ));

import React from 'react';
import { Provider } from 'react-redux';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import PrimaryButton from '../components/PrimaryButton';
import configureStore from '../store/configureStore';

const store = configureStore();

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Primary Button', module)
  .addDecorator((render) => (
    <Provider store={store}>
      {render()}
    </Provider>
  ))
  .add('default', () => (
    <PrimaryButton
      onPress={action('clicked')}
    >
      Primary Button
    </PrimaryButton>
  ))
  .add('disabled', () => (
    <PrimaryButton
      disabled
      onPress={action('clicked')}
    >
      Disabled
    </PrimaryButton>
  ));

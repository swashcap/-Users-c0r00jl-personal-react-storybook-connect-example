import React from 'react';
import { Provider } from 'react-redux';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

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
  .add(
    'default',
    withInfo({
      header: false,
      inline: true,
      text: PrimaryButton.WrappedComponent.__docgenInfo.description
    })(() => (
      <PrimaryButton
        onPress={action('clicked')}
      >
        Primary Button
      </PrimaryButton>
    ))
  )
  .add(
    'disabled',
    withInfo({
      header: false,
      inline: true,
      text: PrimaryButton.WrappedComponent.__docgenInfo.description
    })(() => (
      <PrimaryButton
        disabled
        onPress={action('clicked')}
      >
        Disabled
      </PrimaryButton>
    ))
  );

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import <%= pascalEntityName %> from './<%= camelEntityName %>Component'
storiesOf('<%= pascalEntityName %>', module)
  .add('with text', () => (
    <<%= pascalEntityName %>>
      Hello World
    </<%= pascalEntityName %>>
  ))

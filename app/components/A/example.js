// @flow
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import A from './index'

storiesOf('A', module).add('basic', () => {
  return (
    <div>
      Hello
      <A>Hello</A>
      Hello
    </div>
  )
})

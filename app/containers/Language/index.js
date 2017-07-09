// @flow
import React from 'react'
import { connect, type Connector } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { makeSelectLocale } from './selectors'
import { DEFAULT_LOCALE } from './reducer'

type OP = {
  messages: Object,
  children?: React$Element<*>,
}

type Props = {
  locale: string,
} & OP

export function Language(props: Props) {
  const { locale, messages, children } = props
  const localeMessages = (messages && locale && messages[locale]) || {}
  return (
    <IntlProvider
      defaultLocale={DEFAULT_LOCALE}
      key={locale}
      locale={locale}
      messages={localeMessages}
    >
      {children}
    </IntlProvider>
  )
}

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
})

const connector: Connector<OP, Props> = connect(mapStateToProps)
export default connector(Language)

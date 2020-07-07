import React from 'react'
import Head from 'next/head'

import { ApolloProvider } from '@apollo/react-hooks'
import withData from '../utils/apollo'

import '../assets/styles/app.css'
import Header from '../components/header/Header'

import { Container } from 'react-grid-system'

const App = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Indie's Blog | About Game Development</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </ApolloProvider>
  )
}

export default withData(App)

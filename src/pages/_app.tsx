import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import client from '../graphql/client';
import { store } from '../store';

import 'styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <React.Fragment>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
      />
    </Head>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  </React.Fragment>
);

export default MyApp;

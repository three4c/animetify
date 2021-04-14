import React from 'react';

import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import client from '../graphql/client';
import { store } from '../store';

import 'styles/global.scss';

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  </Provider>
);

export default MyApp;

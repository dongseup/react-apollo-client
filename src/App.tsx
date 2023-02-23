import React from 'react';
import Router from './Router';
import { ApolloProvider } from '@apollo/client';
import { client } from 'apollo/client';
import { BrowserRouter } from 'react-router-dom';
import Navigation from 'components/Navigation';

export default function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Navigation />
                <Router />
            </BrowserRouter>
        </ApolloProvider>
    );
}

import React, { Component } from 'react';
import { AppState, AppProps } from './components/types/interfaces';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export default class App extends Component<AppProps, AppState> {
  state: AppState = {};

  render() {
    return (
      <>
        <Header />
        <Footer />
      </>
    );
  }
}

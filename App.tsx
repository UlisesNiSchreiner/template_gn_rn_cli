import React from 'react';
import HttpClientImp from './src/services/HttpClientImp';
import { Module } from './Module';

const httpClient = new HttpClientImp('http://10.0.2.2:3000');

export const App = (): React.JSX.Element => {
  return <Module httpClient={ httpClient } />;
};

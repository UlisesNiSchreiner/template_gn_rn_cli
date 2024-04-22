import React from 'react';
import {AutProvider} from './src/context/AuthContext';
import {AppNavigation} from './src/AppNavigation';
import HttpClientImp from './src/services/HttpClientImp';
import ClientSessionStorageImp from './src/services/ClientSessionStorageImp';
import {ClientNavigation} from 'test_fluxjs';

interface Props {
  httpClient: HttpClientImp;
}

export const Module = ({httpClient}: Props) => {
  const clientSessionStorage = new ClientSessionStorageImp('module_session');
  const clientNavigation = new ClientNavigation(
    httpClient,
    clientSessionStorage,
  );

  return (
    <AutProvider>
      <AppNavigation
        entryPoint={'first_view_step'}
        clientNavigation={clientNavigation}></AppNavigation>
    </AutProvider>
  );
};

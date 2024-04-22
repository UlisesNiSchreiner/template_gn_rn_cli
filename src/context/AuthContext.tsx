import {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';
import {Event} from 'test_fluxjs';

export interface AuthState {
  eventHandler: (event: Event) => void;
  fetching: boolean;
}

export const authInitialState: AuthState = {
  eventHandler: (_) => {},
  fetching: false,
};

export interface AuthContextProps {
  authState: AuthState;
  sigin: (fetching: boolean) => void;
  setManager: (manager: (event: Event) => void) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AutProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const sigIn = (fetching: boolean) => {
    dispatch({type: 'fetching', value: fetching});
  };

  const sigIn2 = (fevent: (event: Event) => void) => {
    dispatch({type: 'manager', value: fevent});
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider
      value={{
        authState,
        sigin: sigIn,
        setManager: sigIn2,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

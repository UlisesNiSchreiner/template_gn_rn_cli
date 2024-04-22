import { Event } from "test_fluxjs";
import { AuthState } from "./AuthContext";


type AuthAction = { type: 'fetching', value: boolean} | { type: 'manager', value: (event: Event) => void}

export const authReducer = ( state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'fetching':
        return {
            ...state,
            fetching: action.value,
        };
        case 'manager':
            return {
                ...state,
                eventHandler: action.value,
            };
        default: return state;
    }
};

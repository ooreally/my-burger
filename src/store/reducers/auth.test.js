import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth redcucer' , () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });
    it('should store the token upon login', () => {
        expect (reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        },{
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'tok-1',
            userId: 'user-1'
        })).toEqual({
            token: 'tok-1',
            userId: 'user-1',
            error: null,
            loading: false,
            authRedirectPath: '/'
        });

        });
    });


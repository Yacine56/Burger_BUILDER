import authReducer from './auth';
import * as actionTypes from '../actions/AcionsTypes';

describe('auth authReducer', () => {
    it('should return the initial state', () => {
        expect(authReducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            redirectPath: '/'
        });
    });

    it('should store the token upon login', () => {
        expect(authReducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            redirectPath: '/'
        }, { 
            type: actionTypes.AUTH_SUCCESS,
            token: 'some-token',
            userId: 'some-user-id'
         })).toEqual({
            token: 'some-token',
            userId: 'some-user-id',
            error: null,
            loading: false,
            redirectPath: '/'
        });
    })
});
 
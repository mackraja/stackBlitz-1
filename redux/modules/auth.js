import Immutable from 'immutable';
import store from 'store2';
import { push } from 'react-router-redux';

const LOAD = 'auth/LOAD';
const LOAD_SUCCESS = 'auth/LOAD_SUCCESS';
const LOAD_FAIL = 'auth/LOAD_FAIL';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'auth/LOGIN_FAIL';

const LOGOUT = 'auth/LOGOUT';
const FLUSH = 'auth/FLUSH';

const initialState = Immutable.fromJS({
    isLoad: false,
    loadErr: null,
    isLogin: false,
    loginErr: null,
    user: null,
    loading: false
});

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD:
            return state
                .set('isLoad', true)
                .set('loadErr', null);

        case LOAD_SUCCESS:
            return state
                .set('isLoad', false)
                .set('user', action.user);

        case LOAD_FAIL:
            return state
                .set('isLoad', false)
                .set('loadErr', action.error)
                .set('user', {});

        case LOGIN:
            return state
                .set('isLogin', true)
                .set('loginErr', null);

        case LOGIN_SUCCESS:
            return state
                .set('isLogin', false)
                .set('user', action.user);

        case LOGIN_FAIL:
            return state
                .set('isLogin', false)
                .set('loginErr', action.error)
                .set('user', null);

        case LOGOUT:
        case FLUSH: {
            return initialState;
        }

        default:
            return state;
    }
};

export const load = (forced) => async (dispatch, getState, api) => {
    // dont call api if user data is in state
    const user = getState().get('auth').get('user');
    if (user && !forced) {
        console.log('Forced ===== ', user);
        return;
    }
    dispatch({ type: LOAD });
    try {
        const res = await api.get('/v1/session');
        console.log('without Forced ===== ', res);
        if (res.message) {
            dispatch({ type: LOAD_FAIL, error: res.message });
            return;
        }
        dispatch({ type: LOAD_SUCCESS, user: res });
        return res;
    } catch (error) {
        dispatch({ type: LOAD_FAIL, error: error });
    }
};

export const login = (data) => async (dispatch, getState, api) => {
    dispatch({ type: LOGIN });
    try {
        const res = await api.post('/v1/session', { data } );
        const { token } = res;
        dispatch({ type: LOGIN_SUCCESS, user: res });
        store('authToken', token);
        dispatch(load(true));
        return res;
    } catch (err) {
        dispatch({ type: LOGIN_FAIL, error: err.message });
    }
};

export const logout = () => (dispatch, getState, api) => {
    store.remove('authToken');
    dispatch({ type: LOGOUT });
    dispatch({ type: 'FLUSH' });
    dispatch(push('/'));
};

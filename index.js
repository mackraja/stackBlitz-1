import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Map } from 'immutable';
import App from './App';
import configureStore, { history } from './redux/configureStore';
import * as serviceWorker from './serviceWorker';

const initialState = Map();
const store = configureStore(initialState);
const customContext = React.createContext({}); // your own context

ReactDOM.render(
    <Provider store={store} context={customContext}>
        <App history={history} context={customContext} />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


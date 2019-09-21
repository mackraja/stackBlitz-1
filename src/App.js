import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router/immutable';
import routes from './routes';

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './style/scss/style.scss'
// Temp fix for reactstrap
import './style/scss/core/_dropdown-menu-right.scss'

const App = ({ history }) => {
    return (
        <ConnectedRouter history={history} >
            { routes }
        </ConnectedRouter>
    )
};

App.propTypes = {
    history: PropTypes.object
};

export default App;
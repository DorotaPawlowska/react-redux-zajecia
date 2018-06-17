import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import Home from './routes/Home';
import registerServiceWorker from './registerServiceWorker';

const reducer = ( state = 0, action) => {
    switch (action.type){
        case 'INCREMENT':
            return state = state + 1;
        case 'DECREMENT':
            return state = state - 1;
        case 'ZERO':
            return state = 0;
        default:
            return state;
    }
};

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();



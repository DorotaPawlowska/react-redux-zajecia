import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import MineRout from './routes/mineRout';
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

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <MineRout />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();



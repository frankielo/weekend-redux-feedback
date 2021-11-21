import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Reducer
const addDataReducer = (state=[], action)=>{
    if(action.type === 'ADD_DATA'){
        return [...state, acation.payload]
    }
    else if(action.type === 'CLEAR_REDUCER'){
        return []
    }
    return state
}

// Store
const storeInstance = createStore(
    combineReducers({
        addDataReducer
    })
)

ReactDOM.render(
<Provider store={storeInstance}>
 <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();

import React from 'react'
import Interface from './utils/interface';
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from 'redux'
import reducer from './config/reducer';
const store = createStore();

export default function Counter() { 
    return(
        <Provider store={store}>
            <Interface />
        </Provider>
    )
}

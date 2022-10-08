import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import './index.css';

import {setupStore} from "./redux";


const store = setupStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);


reportWebVitals();

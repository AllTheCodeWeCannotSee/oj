import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import configureStore from './store/index.js';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Welcome from "./views/Welcome";
import Home from "./views/Home";
import {listenToAuthChanges} from "./actions/authAction";

const store = configureStore();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome/>
    },

    
    {
        path: "/home",
        element: <Home/>
    }
]);

function App() {
    useEffect(() => {
        store.dispatch(listenToAuthChanges())
    }, [])

    return (
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>)

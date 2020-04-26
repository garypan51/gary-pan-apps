import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app/App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import {createRoutes} from "./routes";

const render = () => {
    const routes = createRoutes()
        ReactDOM.render(
            <React.StrictMode>
                <App routes={routes} />
            </React.StrictMode>,
            document.getElementById('root')
        )
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
render()
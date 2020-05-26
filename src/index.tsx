import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {App} from './containers/app/App'
import * as serviceWorker from './serviceWorker'
import {createRoutes} from "./routes"
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";

const render = () => {
    const routes = createRoutes()
        ReactDOM.render(
            <React.StrictMode>
                <BrowserRouter>
                    <Provider store={store}>
                        <App routes={routes} />
                    </Provider>
                </BrowserRouter>
            </React.StrictMode>,
            document.getElementById('root')
        )
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
render()

import React from 'react';
import {Provider} from "react-redux";
import store from "../../redux/store"
import Home from "../home"
import {AppBar} from "../../components/AppBar";
import "./App.scss"
import {BrowserRouter} from "react-router-dom";

interface IProps {
    routes: any
}

const App = (props: IProps) => {

  return (
      <Provider store={store}>
          <div id={"app-root"}>
              <AppBar/>
              <BrowserRouter>
                  {props.routes}
              </BrowserRouter>
          </div>
      </Provider>
  );
}

export default App;

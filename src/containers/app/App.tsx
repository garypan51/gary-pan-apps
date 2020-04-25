import React from 'react';
import {Provider} from "react-redux";
import store from "../../redux/store"
import Home from "../home"

interface IProps {
    routes: any
}

const App = (props: IProps) => {

  return (
      <Provider store={store}>
          <Home/>
      </Provider>
  );
}

export default App;

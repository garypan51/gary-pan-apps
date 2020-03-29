import React from 'react';
import {Provider} from "react-redux";
import store, {history} from "../../redux/store"
import {ConnectedRouter} from "connected-react-router"

interface IProps {
    routes: any
}

const App = (props: IProps) => {

  return (
      <Provider store={store}>
          <ConnectedRouter history={history}>
              {props.routes}
          </ConnectedRouter>
      </Provider>
  );
}

export default App;

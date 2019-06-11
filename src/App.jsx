import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Home from './views/home/index';
import Layout from './components/layout';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
